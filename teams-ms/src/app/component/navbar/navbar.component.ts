import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';

import {environment} from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.style.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

    currentUrl ='';
    userData: any;
    
    $userData: Subscription;

    avatars = environment.userImages;

    materialIcons = {
        Project: 'domain',
        Follow: 'person_add',
        Job: 'work_outline'
    }

    constructor( private _auth: AuthService, private _data: DataService, private _http: HttpService, private _router: Router) {
        _router
        .events
        .pipe(
            filter(e => e instanceof NavigationEnd)
        )
        .subscribe((val: any) => {
            console.log(val.url);
            this.currentUrl = val.url;
        });
    }

    ngOnInit(): void {

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
        
        this.$userData.unsubscribe();
    }

    logOut(): void {
        if (confirm('Are you sure you want to log out?')) {
            this._auth.LogOut();
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
