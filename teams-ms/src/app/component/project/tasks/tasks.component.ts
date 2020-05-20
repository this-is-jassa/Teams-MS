import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.html',
    styleUrls: ['./tasks.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

    constructor(private _http: HttpService) { }

    $projectData = new BehaviorSubject<any>(null);
    $projectSubscription: Subscription;

    notes: any[][] = [[]];
    groups = new Set();


    @Input() userName;
    @Input() set projectData(data: any) {
        this.$projectData.next(data);
    }
    @Input() role = 'Developer';

    get projectData() {
        return this.$projectData.getValue();
    }

    groupIndexOnFocus = 0;
    noteIndexOnFocus = 0;
    jobClaimIndex = 0;


    ngOnInit(): void {

        this.$projectSubscription = this.$projectData.subscribe(data => {
            if (data !== undefined) {
                this.fetchNotes();
            }
        });

    }

    ngOnDestroy(): void {
        this.$projectSubscription.unsubscribe();
    }


    async fetchNotes() {
        const response = await this._http.GET('/projects/' + this.projectData.name + '/stickey').toPromise();

        const rawNotes = response.data.stickey;
        console.log(rawNotes)

        for (const note of rawNotes) {
            this.groups.add(note.group);
            const index = [...this.groups].indexOf(note.group);

            if (this.notes[index] === undefined) {
                this.notes.push([note]);
            } else {
                this.notes[index].push(note);
            }
        }
    }


    async onEdit(payload) {

        if (this.groupIndexOnFocus > -1) {

            let noteOnFocus = this.notes[this.groupIndexOnFocus][this.noteIndexOnFocus];

            const response = await this._http.POST('/projects/stickey/update', { ...payload, stickeyId: noteOnFocus._id, name: this.projectData.name }).toPromise();
            if (response.success) {

                const domChange = {
                    ...payload,
                    _id: noteOnFocus._id,
                    name: payload.stickeyName,
                    timeStamp: noteOnFocus.timeStamp,
                    request: noteOnFocus.request
                }

                if (noteOnFocus.group === payload.group) {
                    this.notes[this.groupIndexOnFocus][this.noteIndexOnFocus] = domChange;
                } else {
                    // Change the group (Now move it to sorted position)

                    this.notes[this.groupIndexOnFocus].splice(this.noteIndexOnFocus, 1);

                    if(this.groups.has(domChange.group)){
                        const groupIndex = [...this.groups].indexOf(domChange.group);
                        this.notes[groupIndex].push(domChange)

                    }else {
                        this.groups.add(payload.group)
                        this.notes.push([domChange])
                    }
                }

            }

        } else {

            const newNote = await this._http.POST('/projects/stickey/post', { ...payload, name: this.projectData.name }).toPromise();
            if (newNote.success) {

                const domChange = { ...newNote.data }

                if(this.groups.has(domChange.group)){
                    const groupIndex = [...this.groups].indexOf(domChange.group);
                    this.notes[groupIndex].push(domChange)
                }else {
                    this.groups.add(domChange.group)
                    this.notes.push([domChange])
                }

            }
        }

    }

    crossOff(x, y) {
        this.setFocus(x, y);
        let payload = { ...this.notes[this.groupIndexOnFocus][this.noteIndexOnFocus] }
        payload.crossOff = !payload.crossOff;
        this.onEdit({ ...payload, stickeyName: payload.name });
    }

    async requestDonetask(x, y) {

        let focusNote = this.notes[x][y];

        // console.log(focusNote.request.indexOf(this.userName))
        console.log((focusNote.request.indexOf([this.userName])))

        let payload = {
            name: this.projectData.name,
            stickeyId: focusNote._id
        }

        if (focusNote.request.includes(this.userName)) {

            const response = await this._http.POST('/projects/stickey/delete/request', { ...payload, userName: this.userName }).toPromise()
            if (response.success) {
                console.log(this.userName)
                focusNote.request.splice(focusNote.request.indexOf(this.userName), 1)
            }
        }
        else {
            const response = await this._http.POST('/projects/stickey/update/request', payload).toPromise()
            if (response.success) {
                focusNote.request.push(this.userName);
            }
        }

    }

    async onDelete() {
        const noteOnFocus = this.notes[this.groupIndexOnFocus][this.noteIndexOnFocus];

        const deleted = await this._http.POST('/projects/stickey/delete', 
        {stickeyId: noteOnFocus, name: this.projectData.name}).toPromise();
        
        if(deleted.success) {
            this.notes[this.groupIndexOnFocus].splice(this.noteIndexOnFocus, 1);
        }
    }

    async onDeleteJob() {
        const noteOnFocus = this.notes[this.groupIndexOnFocus][this.noteIndexOnFocus];
        
        const paylaod = {
            stickeyId: noteOnFocus._id,
            userName: noteOnFocus.request[this.jobClaimIndex],
            name: this.projectData.name
        }

        const deleteReq = await this._http.POST('/projects/stickey/delete/request', paylaod).toPromise();
        noteOnFocus.request.splice(this.jobClaimIndex, 1);

    }

    addClick(): void {
        this.groupIndexOnFocus = -1;
        this.noteIndexOnFocus = -1;
    }

    setFocus(x, y, z = 0) {
        this.groupIndexOnFocus = x;
        this.noteIndexOnFocus = y;
        this.jobClaimIndex = z;
    }
    



}
