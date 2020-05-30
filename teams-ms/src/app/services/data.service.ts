import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataService {

    private userData: any = {};
    private following: any[] =[];

    private $userdata = new BehaviorSubject(this.userData);
    private $followingData = new BehaviorSubject(this.following);

    constructor(private _http: HttpService) {}

    async refresh() {
        this.fetchUser();
        this.fetchfollowing();
    }

    reset() {
        this.userData = {};
        this.following = [];
        this.$userdata.next(this.userData);
        this.$followingData.next(this.following);
    }

    getUser(): Observable<any> {
        return this.$userdata
    }

    setUser(key: string, value: any): void {
        this.userData[key] = value;
        this.$userdata.next(this.userData);
    }

    getFollowing(): Observable<any> {
        return this.$followingData;
    }

    setFollowing(following) {
        this.following = [...following];
        this.$followingData.next(following);
    }

    async fetchUser() {
        try {
            const userReq = await this._http.GET('/users/get').toPromise();
            this.userData = userReq.data;
            this.$userdata.next(this.userData);
            
        }
        catch (err) {
            console.log("Error loading User")
        }
    }

    async fetchfollowing() {
        
        try {

            const followingReq = await this._http.GET('/users/get/following').toPromise();
            
            this.following = [...followingReq.data.following];
            this.$followingData.next(this.following);

        } catch(err) {
            console.log("error loading following")
        }
    }

}