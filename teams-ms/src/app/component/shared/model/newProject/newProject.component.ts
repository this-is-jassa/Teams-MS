import { Component, OnInit, Input, SimpleChanges, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-new-project-model',
    templateUrl: './newProject.html',
    styleUrls: ['./newProject.scss']
})
export class NewProjectComponent implements OnInit, OnDestroy {
    

    @Input() userInformation: any;

    avatars = environment.userImages;

    membersSet = new Set();
    $following: Subscription;
    
    searchData = [];
    membersAdded = [];
    following = [];

    searchText ='';

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


    ngOnInit() {
        this.$following = this._data.getFollowing().subscribe(following => {
            this.following = [...following];
        })
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

            Promise.all(promisArr).then(data => {

                this._data.fetchUser();
            })
            
        });
    }

    ngOnDestroy(): void {
        this.$following.unsubscribe();
    }
}
