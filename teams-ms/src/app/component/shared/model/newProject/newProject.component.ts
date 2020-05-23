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
    

    @Input() userInformation: any;

    public avatars = environment.userImages;

    public searchData = [];

    public membersSet = new Set();

    public membersAdded = [];
    public following: any[] = [];

    public formData: any = {
        name: '',
        description: '',
        isPrivate: true,
        members: [],
        sugessions: [],
        isFreeze: false,
        endingdate: Date.now()
    }
    public searchText ='';
    


    constructor(private _http: HttpService, private _data: DataService) { }

    ngOnChanges(changes: SimpleChanges){
        if(this.userInformation.userName) {
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
        if(!this.membersSet.has(member.userName) && this.userInformation.userName !== member.userName){
            this.membersSet.add(member.userName)
            this.membersAdded.push(member);
        }
    }
    userRemoved(member): void {
        const index = this.membersAdded.findIndex(item => item.userName === member.name)
        this.membersAdded.splice(this.membersAdded[index], 1);
        this.membersSet.delete(member.userName);
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
                
                console.log(data.data);

                promisArr.push(
                    this._http.POST('/projects/post/member', {name: data.data, member: {name: item.userName, permission: 'Developer'} })
                    .toPromise()
                ) 
            });
            console.log("y")

            Promise.all(promisArr).then(data => {
            console.log("x")

                this._data.refreshData();
            })
            
        });

        

    }
}
