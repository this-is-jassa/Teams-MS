import { Component, OnInit, Input, SimpleChanges, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-new-project-model',
    templateUrl: './newProject.html',
    styleUrls: ['./newProject.scss']
})
export class NewProjectComponent implements OnInit {


    @Input() userInformation: any;


    searchData = [];
    membersAdded = [];

    formData: any = {
        name: '',
        description: '',
        isPrivate: true,
        members: [],
        sugessions: [],
        isFreeze: false,
        endingdate: Date.now()
    }


    constructor(private _http: HttpService, private _data: DataService) { }


    ngOnInit() { }


    onMemberAdded(membersAdded): void {

        this.membersAdded = membersAdded;
    }


    async createProject() {
        
        let payload = {
            name: this.formData.name,
            discription: this.formData.description,
            private: !this.formData.isPrivate,
            isFreeze: this.formData.isFreeze,
            startingDate: this.formData.startingDate,
            endingDate: this.formData.endingDate,
            members: []
        }

        const project = await this._http.POST('/projects/post', payload).toPromise()

        let promisArr = [];

        this.membersAdded.forEach((item: any) => {

            payload.members.push({ name: item.userName, permission: 'Developer', avatar: item.avatar, status: {value: 'Do Not Disturb'} })

            promisArr.push(
                this._http.POST('/projects/post/member', { name: project.data, member: { name: item.userName, permission: 'Developer', avatar: item.avatar } })
                    .toPromise()
            )
        });

        payload.name = project.data;

        payload.members.push({name: this.userInformation.userName, permission: 'Owner', avatar: this.userInformation.avatar  , status: {value: 'Do Not Disturb'} })        
        this.userInformation.projects.push(payload);

        this._data.setUser(this.userInformation);

        await Promise.all(promisArr);

    }

} 
