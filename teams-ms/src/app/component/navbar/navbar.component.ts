import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.style.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {


    isVisile = false;
    userData: any;
    searchText: string = '';
    searchData: any[] = [];

    following: any;
    searchUser: any;

    $isVisibe: Subscription;
    $userData: Subscription;

    materialIcons = {
        Project: 'domain',
        Follow: 'person_add',
        Job: 'work_outline'
    }

    constructor(private _view: ViewService, private _auth: AuthService, private _data: DataService, private _http: HttpService) { }

    ngOnInit(): void {

        this.$isVisibe = this._view.getObs()
            .subscribe(data => {
                this.isVisile = data.navbar.isVisible;
            });


        this.$userData = this._data.getUser()
            
            .subscribe(data => {
                try{
                    data.notify.reverse();
                } catch(err) {
                    
                }
                finally{
                    this.userData = data;
                }
            });

    }


    ngOnDestroy(): void {
        this.$isVisibe.unsubscribe();
        this.$userData.unsubscribe();
    }

    logOut(): void {
        if (confirm('Are you sure you want to log out?')) {
            this._auth.LogOut();
        }
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

    deleteNotify() {

        this._http.POST('/users/update/notifySeen', {})
            .toPromise()
            .then(res => {
                if (res.success) {
                    this._data.setUser('notify', [])
                }

            })
    }

}
