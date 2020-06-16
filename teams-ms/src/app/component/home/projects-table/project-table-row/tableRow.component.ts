import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from '../../../../../environments/environment'


@Component({
    selector: 'app-project-table-row',
    templateUrl: './projectRow.html',
    styleUrls: ['./projectRow.scss']
})
export class ProjectTableRowComponent implements OnInit {

    @Input() projectData: any = [];
    @Input() index: number;
    @Input() userName: String;
    
    @Output() OnshowMembers = new EventEmitter();
    
    members = [];

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

        this.members = this.projectData.members;

        const length = this.members.length;

        for (let i = 0; i < length; i++) {
            let item = this.members[i];
            
            
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

        const response = await this._http.POST('/projects/update/member/details', {
            value: this.userInProjectData.status.value,
            name: this.projectData.name
        })
            .toPromise();

    }

}
