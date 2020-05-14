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

    notes = [];

    @Input() set projectData(data: any) {
        this.$projectData.next(data);
    }

    get projectData() {
        return this.$projectData.getValue();
    }

    ngOnInit(): void {

        this.$projectSubscription = this.$projectData.subscribe(data => {
            if(data !== undefined) {
                this.fetchNotes();
            }
        });

    }

    ngOnDestroy(): void {
        this.$projectSubscription.unsubscribe();
    }

    async fetchNotes() {
        const response = await this._http.GET('/projects/'+ this.projectData.name + '/stickey').toPromise();
        this.notes = response.data.stickey;
    }
}
