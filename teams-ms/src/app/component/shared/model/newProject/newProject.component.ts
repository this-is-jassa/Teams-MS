import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-new-project-model',
    templateUrl: './newProject.html',
    styleUrls: ['./newProject.scss']
})
export class NewProjectComponent implements OnChanges {
    

    @Input() userInformation;

    public avatars = environment.userImages;

    public searchData = [];
    public membersAdded = new Set();
    public following: any[];

    public formData: any = {
        name: '',
        description: '',
        isPrivate: true,
        members: [],
        sugessions: [],
        isFreeze: false,
        startingDate: '',
        endingdate: ''
    }
    public searchText ='';
    


    constructor(private _http: HttpService, private _data: DataService) { }

    ngOnChanges(changes: SimpleChanges){
        if(changes.userInformation){
            this._http.GET('/users/get/following/'+ this.userInformation.userName)
            .toPromise()
            .then(data => {
                this.following = data.data.following;
            })
        }
    }


    searchUsers(text): void {
        if(text !== "") {
            
            this._http.GET('/users/search/'+text)
            .toPromise()
            .then(data => {
                this.searchData = data;
            })

        }else {
            this.searchData = [];
        }
    }

    userAdded(member): void {
        this.membersAdded.add(member);
    }
    userRemoved(member): void {
        this.membersAdded.delete(member)
    }

    createProject(): void {
        let payload = {
            name: this.formData.name,
            discription: this.formData.description,
            private: !this.formData.isPrivate,
            isFreeze: this.formData.isFreeze,
            startingDate: this.formData.startingDate,
            endingDate: this.formData.endingDate
        }
        this._http.POST('/projects/post', payload)
        .toPromise()
        .then(data => {
            let promisArr =[];
            this.membersAdded.forEach((item: any) => {
                promisArr.push(
                    this._http.POST('/projects/post/member', {name: data.data, member: {name: item.userName, permission: 'Developer'} })
                    .toPromise()
                )
            });
            Promise.resolve(promisArr)
            .then(data2 => {
                this._data.refreshData();
               
            })
            
        });

        

    }
}
