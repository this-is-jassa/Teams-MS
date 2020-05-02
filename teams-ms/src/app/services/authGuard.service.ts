import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';


@Injectable()
export class CanActivateGuard implements CanActivate {

    constructor(private _auth: AuthService, private _http: HttpService ) {
        
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {   
        
        const rout = this._auth.routeGuard(false);
        rout.then(data => {
            if(!data) {
                this._http.REDIRECT('/auth/signin');
            }
        });

        return rout;
    }
}
