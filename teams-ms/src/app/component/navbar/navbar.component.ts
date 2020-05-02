import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.style.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

    avatars = environment.userImages;

    @Input() isVisile = false;
    userData: any;
    searchText: string = '';
    searchData: any;

    following: any;
    searchUser: any;

    $isVisibe: Subscription;
    $userData: Subscription;

    constructor(private _view: ViewService, private _auth: AuthService, private _data: DataService, private _http: HttpService) { }

    ngOnInit(): void {

        this.$isVisibe = this._view.getObs()
            .subscribe(data => {
                this.isVisile = data.navbar.isVisible;
            });

        this.$userData = this._data.getUser()
            .subscribe(data => {
                this.userData = data;
                if (data.userName) {
                    this._http.GET('/users/get/following/' + this.userData.userName)
                        .toPromise()
                        .then(data => {
                            this.following = data.data.following;
                        })
                }
                console.log("SWBHWBD")
            });

    }


    ngOnDestroy(): void {
        this.$isVisibe.unsubscribe();
        this.$userData.unsubscribe();
    }

    logOut(): void {
        this._auth.LogOut();

    }

    searchUsers(text): void {
        if (text !== "") {

            this._http.GET('/users/search/' + text)
                .toPromise()
                .then(data => {
                    this.searchData = data;
                })

        } else {
            this.searchData = [];
        }
    }
}
