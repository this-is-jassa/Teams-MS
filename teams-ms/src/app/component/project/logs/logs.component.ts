import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-logs',
    templateUrl: './logs.html',
    styles: []
})
export class LogsComponent implements OnInit, OnDestroy {
    
    $projectNameChange = new BehaviorSubject<any>(null);

    $s1: Subscription;
    
    @Input() set projectName(data) {
        this.$projectNameChange.next(data);
    }

    logs: any[] =[];
    materialIcons = {
        
        NewDir: 'create_new_folder',
        NewFile: 'insert_drive_file',
        NewMember: 'person_add',
        NewNote: 'post_add',

        Delete: 'delete',
        DeleteMember: 'person_add_disabled',

        EditDir: '',
        EditFile: '',
        EditNote: '',
        Job: '',
        Project: ''
    }

    constructor(private _http: HttpService) { }

    ngOnInit(): void {
        this.$s1 =this.$projectNameChange.subscribe(projectName => {
            this.fetchLogData(projectName);
        })
    }

    ngOnDestroy(): void {
        this.$s1.unsubscribe()
    }

    async fetchLogData(projectName: string) {
        
        const logsData = await this._http.GET('/projects/'+ projectName+ '/logs').toPromise();
        this.logs = logsData.data;
    }
}
