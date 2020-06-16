import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import {environment} from '../../environments/environment'
import { Router } from '@angular/router';

@Injectable()
export class HttpService {
    constructor(private _http: HttpClient, private router: Router){}

    GET(route: string): Observable<any>{
        return this._http.get('http://localhost:3000/api'+route);
    }

    POST(route: string, data: any): Observable<any> {
        return this._http.post('http://localhost:3000/api'+route, data);
    }

    REDIRECT(route): Promise<boolean> {
        return this.router.navigate([route]);
    }
}