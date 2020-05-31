import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import {environment} from '../../../../../environments/environment'


@Component({
    selector: 'app-project-table-row',
    templateUrl: './projectRow.html',
    styleUrls: ['./projectRow.scss']
})
export class ProjectTableRowComponent implements OnInit {

    @Input() projectData: any = [];

    @Input() index: number;
    @Input() members;
    @Input() userName: String;

    @Output() OnshowMembers = new EventEmitter();

    public userImages = environment.userImages;

    public userInProjectData;
    public badgeStyleClass = {
        'Owner': 'badge-dark',
        'Admin': 'badge-warning',
        'Developer': 'badge-info'
    }


    public isChanged = false;

    constructor(private _http: HttpService) { }

    ngOnInit(): void {

        for (const item of this.members) {

            if (item.name === this.userName) {
                this.userInProjectData = item;
                break;
            }
        }
    }

    loadMembersmodel(): void {
        this.OnshowMembers.emit(this.members);
    }

    async OnstatusChanged() {
        console.log(this.userInProjectData.status.value);
        
        const response = await this._http.POST('/projects/update/member/status', {
            value: this.userInProjectData.status.value,
            name: this.projectData.name
        })
        .toPromise();

        console.log(response)

    }

}
