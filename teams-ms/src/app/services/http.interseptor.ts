import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


    constructor(private _auth: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        
        let tokenisedReq = req.clone({
            setHeaders: {
                xauthtoken: this._auth.getToken() || ''
            }
        })

        return next.handle(tokenisedReq);
    }

}