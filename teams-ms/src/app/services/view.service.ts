import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ViewService {
    
    private data = {
        navbar: {
            isVisible: false
        },
        loader: {
            isVisible: false
        }
    }

    private obs: BehaviorSubject<any> = new BehaviorSubject(this.data);

    constructor() {}

    getObs(): Observable<any> {
        return this.obs.asObservable();
    }

    setObs(key: string,subkey: string ,value: any) {
        this.data[key][subkey] = value;
        this.obs.next(this.data);
    }


}