import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ViewService } from 'src/app/services/view.service';
import * as firebase from "firebase";
// import 'firebase/auth';

@Component({
    selector: 'app-sign-in',
    templateUrl: './signin.html',
    styleUrls: ['./signin.scss']
})
export class SignInComponent {
    
    public userName: string; 
    public password: string;

    constructor(private _http: HttpService, private _auth: AuthService, private _router: Router, private _view: ViewService) {}


    async signIn(){

        this._view.setObs('loader','isVisible', true);

        const logreq =  await this._http.POST('/auth/login', {userName: this.userName, password: this.password})
        .toPromise()
        .then( (data: any) => {
            if(data.token){

                firebase.auth().signInWithCustomToken(data.token)
                .then(()=>{
                    this._auth.setToken()
                    .then(success => {
                        if(success) {this._http.REDIRECT('/home')}
                        else {alert("Error Redirecting")}

                        this._view.setObs('loader','isVisible', false);
                        this._view.setObs('navbar','isVisible', true);
                    });
                    
                })
                .catch((err)=>{
                    console.log(err);
                    alert("Error, check the console");
                })

            }else{
                this._view.setObs('loader','isVisible', false);
                alert('User Information is wrong');
            }
            
        });
    }
}
