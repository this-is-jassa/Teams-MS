import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataService {
    
    private userData: any = {};

    private $userdata = new BehaviorSubject(this.userData);

    constructor(private _http: HttpService) {

    }

    refreshData() {
        this._http.GET('/users/get')
        .toPromise()
        .then(res => {
            console.log("CAlled");
            if(res.success) {
                this.userData = res.data;
                this.$userdata.next(res.data);
            }else {
                alert("Error Loading user data");
            }
        })
        .catch((err)=> {
            alert('Error Occured while loading user data')
        })
    }

    reset() {
        this.userData = {};
        this.$userdata.next(this.userData);
    }

    getUser(): Observable<any> {
        // this.refreshData()
        return this.$userdata
    }

    setUser(key: string, value: any): void{
        this.userData[key] = value;
        this.$userdata.next(this.userData);
    }


}