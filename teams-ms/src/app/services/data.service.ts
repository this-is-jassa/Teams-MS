import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataService {

    private $userdata = new BehaviorSubject({});
    private $followingData = new BehaviorSubject([]);
    private currentUserName = '';

    constructor(private _http: HttpService) { }

    async refresh() {
        await this.fetchUser();
        this.fetchfollowing();
    }

    reset() {
        this.currentUserName = '';
        this.$userdata.next({});
        this.$followingData.next([]);
    }

    getUser(): Observable<any> {
        if (this.currentUserName === '') { this.refresh() }
        return this.$userdata;
    }

    setUser(newUser): void {
        this.$userdata.next(newUser);
    }


    getFollowing(): Observable<any> {
        if (this.currentUserName === '') { this.refresh() }
        return this.$followingData;
    }

    setFollowing(following) {
        this.$followingData.next([...following]);
    }



    private async fetchUser() {
        try {

            if (this.currentUserName === undefined) { return }

            const userReq = await this._http.GET('/users/get').toPromise();
            this.currentUserName = userReq.data.userName;
            this.$userdata.next(userReq.data);

        }
        catch (err) {
            console.log("Error loading User")
        }
    }

    private async fetchfollowing() {

        try {
            const followingReq = await this._http.GET(`/users/following/${this.currentUserName}`).toPromise();
            this.$followingData.next([...followingReq.data.following]);

        } catch (err) {
            console.log("error loading following")
        }
    }

}