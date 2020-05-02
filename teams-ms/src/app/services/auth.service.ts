import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database"
import { DataService } from './data.service';


@Injectable()
export class AuthService {


    constructor(private _http: HttpService, private _data: DataService) { }

    localToken(): Promise<any> {
        return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    }

    getToken(): string {
        return localStorage.getItem("token");
    }

    setToken(): Promise<boolean> {
        return this.localToken()
            .then(token => {
                localStorage.setItem("token", token);
                
                return true;
            })
            .catch(err => {
                alert("Error");
                console.error(err);
                return false;
            });
    }

    removeToken(): void {
        localStorage.removeItem("token");
    }

    LogOut(): void {
        firebase.auth().signOut()
            .then(() => {
                this.removeToken();
                this._data.reset();
                this._http.REDIRECT('/auth/signin');
            })
            .catch((error) => {
                alert("Error Occured");
                console.log(error);
            });
    }



    // authentication
    async routeGuard(isRetried: boolean): Promise<boolean> {
        const token = this.getToken();

        if (!!token) {
            return this._http.POST('/auth/activateroute', {}).toPromise()
                .then(data => {
                    return new Promise<boolean>((res, rej) => { res(data) });
                });
        } else {
            if (!isRetried) {
                console.log("YEs")
                this.setToken().then(data => { this.routeGuard(true); })
            } else {
                return new Promise<boolean>((res, rej) => {
                    res(false);
                });
            }
        }

    }

}