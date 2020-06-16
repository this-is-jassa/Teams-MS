
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-profile-setting',
    templateUrl: './profileSettings.html',
    styles: ['']
})
export class ProfileSettingsComponent implements OnInit {
    
    userData: BehaviorSubject<any>;


    constructor(private _http: HttpService, private _data: DataService) { }

    ngOnInit(): void {
        // this.userData = this._data.fetchUser();    
        
        this.fetchData();        
    }

    fetchData() {
    }
}
