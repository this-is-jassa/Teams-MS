import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.html',
    styles: ['']
})
export class ProfileComponent implements OnInit, OnDestroy {


    $userData: Subscription;

    userName = '';
    isFollowing = false;
    
    userData: any = {};
    friendData: any ={};

    following = {
        length: 0,
        list: []
    };
    followers = {
        length: 0,
        list: []
    };
    projects = [];
    modelMembers: []

    avatars = environment.userImages;

    constructor(private _http: HttpService, private _router: ActivatedRoute, private _data: DataService) { }

    ngOnInit(): void {

        this._data.refresh()
        this.$userData = this._data.getUser().subscribe(user => {
            this.userData = user;
        })

        this.userName = this._router.snapshot.paramMap.get('userName');

        this.fetch();
    }

    ngOnDestroy(): void {
        this.$userData.unsubscribe();
    }


    async fetch() {

        const result = await Promise.all([
            this._http.GET(`/users/get/${this.userName}`).toPromise(),
            this._http.GET(`/users/following/${this.userName}`).toPromise(),
            this._http.GET(`/users/followers/${this.userName}`).toPromise(),
            this._http.GET(`/projects/${this.userName}`).toPromise()
        ]);


        this.friendData = result[0].data;
      
        this.followers = {
            list: [...result[2].data.followers],
            length: result[2].length
        };

        this.following = {
            list: [...result[1].data.following],
            length: result[1].length
        }

        this.projects.push(...result[3]);

        const isFollowingReq = await this._http.GET(`/users/isFollowing/${this.friendData._id}`).toPromise();
        this.isFollowing = isFollowingReq.data;

    }

    // Follow or Unfollow
    async friendAction() {
        let url;
        if(this.isFollowing) { url = '/users/unfollow'; this.followers.length-=1;}
        else {url = '/users/follow'; this.followers.length+=1; this.followers.list.push(this.userData)}

        this.isFollowing = !this.isFollowing;

        await this._http.POST(url, {_id: this.friendData._id}).toPromise();
    }

    showMembers(members: any) {
        this.modelMembers = members;
    }
}
