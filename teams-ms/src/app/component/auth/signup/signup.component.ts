import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ViewService } from 'src/app/services/view.service';
import * as firebase from "firebase";

@Component({
    selector: 'app-sign-up',
    templateUrl: './signup.html',
    styleUrls: ['./signup.scss']
})
export class SignUpComponent implements OnInit {

    public userName: String;
    public password: String;
    public cPassword: String;

    constructor(private _http: HttpService, private _auth: AuthService, private _router: Router, private _view: ViewService ) { }

    ngOnInit(): void { }

    async signUp(){
        
        this._view.setObs('loader','isVisible', true);


        const logreq = await this._http.POST('/auth/register', {userName: this.userName, password: this.password})
        .toPromise()
        .then(data => {
            if(data.token){
                firebase.auth().signInWithCustomToken(data.token)
                .then(()=>{
                    this._auth.setToken()
                    .then(success => {
                        if(success) {this._http.REDIRECT('/home') }
                        else {alert("Error Redirecting")}

                        this._view.setObs('loader','isVisible', false);
                    });
                })
                .catch((err)=>{
                    console.log(err);
                    alert("Error, check the console");
                })

            }else{
                alert('User Information is wrong');
            }
            this._view.setObs('loader','isVisible', false);
          
        });
    }

}
