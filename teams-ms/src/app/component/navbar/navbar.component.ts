import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.style.scss']
})
export class NavBarComponent implements OnInit {
    
    @Input() isVisile = false;

    constructor(private _view: ViewService, private _auth: AuthService) { }

    ngOnInit(): void {

        this._view.getObs()
        .subscribe(data => {
            this.isVisile = data.navbar.isVisible;
        });
   
    }

    logOut(): void {
            this._auth.LogOut();
            
    }
}
