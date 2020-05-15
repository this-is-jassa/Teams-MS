import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
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

    @Input() set projectData(data: any) {
        this.$projectData.next(data);
    }
    @Input() role = 'Developer';

    get projectData() {
        return this.$projectData.getValue();
    }

    groupIndexOnFocus =0
    noteIndexOnFocus =0


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

    preEdit(x, y) {

        this.groupIndexOnFocus = x;
        this.noteIndexOnFocus = y;
        
        // const payload = {
        //     group: data.group,
        //     name: data.name,
        //     message: data.message,
        //     crossOff: data.crossOff
        // }

        // this._http.POST('/projects/stickey/update', { name: payload.name })
        //     .toPromise()
        //     .then(response => {
                
        //     })
    }



}
