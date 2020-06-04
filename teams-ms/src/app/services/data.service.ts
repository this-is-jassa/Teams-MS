import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataService {

    private $userdata = new BehaviorSubject({});
    private $followingData = new BehaviorSubject([]);
    private currentUserName = '';

    constructor(private _http: HttpService) {}

    async refresh() {
        await this.fetchUser();
        this.fetchfollowing();
    }

    reset() {
        this.$userdata.next({});
        this.$followingData.next([]);
    }
 
    getUser(): Observable<any> {
        return this.$userdata
    }

    setUser(key: string, value: any): void {
        let userData = this.$userdata.value;
        userData[key] = value;
        this.$userdata.next(userData);
    }

    getFollowing(): Observable<any> {
        return this.$followingData;
    }

    setFollowing(following) {
        this.$followingData.next([...following]);
    }

    async fetchUser() {
        try {
            
            if(this.currentUserName === undefined) {return}

            const userReq = await this._http.GET('/users/get').toPromise();
            this.currentUserName = userReq.data.userName;
            this.$userdata.next(userReq.data);
            
        }
        catch (err) {
            console.log("Error loading User")
        }
    }

    async fetchfollowing() {
        
        try { 

            const followingReq = await this._http.GET(`/users/following/${this.currentUserName}`).toPromise(); 
            this.$followingData.next([...followingReq.data.following]);

        } catch(err) {
            console.log("error loading following")
        }
    }

}