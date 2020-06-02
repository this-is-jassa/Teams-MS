import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewService } from 'src/app/services/view.service';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.html',
    styles: ['']
})
export class ProfileComponent implements OnInit {


    $userData: Subscription;

    userData = {}

    userName = '';
    following = {};
    followers = {};

    constructor(private _http: HttpService, private _router: ActivatedRoute, private _data: DataService) { }

    ngOnInit(): void {

        this._data.fetchUser()
        this.$userData = this._data.getUser().subscribe(user => {
            this.userData = user;
        })

        this.userName = this._router.snapshot.paramMap.get('userName');

        this.fetch();
    }

    async fetch() {

        const result = await Promise.all([
            this._http.GET(`/users/following/${this.userName}`).toPromise(),
            this._http.GET(`/users/followers/${this.userName}`).toPromise()
        ]);

        this.followers = {
            list: result[1].data,
            length: result[1].length
        };

        this.following = {
            list: result[0].data,
            length: result[0].length
        }

    }
}
