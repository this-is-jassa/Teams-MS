import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ViewService } from 'src/app/services/view.service';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import {environment} from '../../../environments/environment';
import { personalNotes } from 'src/app/implements/personalNotes';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
    
    public personalNotesData: personalNotes[];
    public userData;
    public userImages: any[] = environment.userImages; 

    // Observables *** Make Sure to Unsubscribe in ngOnDestroy function to prevent data leak ***
    private $userObs: Subscription;


    constructor(private _http: HttpService, private _view: ViewService, private _data: DataService) { }


    ngOnInit(): void {
        this._data.refreshData();
        this._view.setObs('navbar', 'isVisible', true);

        this.fetchData();

    }

    ngOnDestroy(): void {
        this.$userObs.unsubscribe();
    }

    private fetchData(): void {

        this.$userObs = this._data.getUser()
            .subscribe(user => {
                this.userData = user;
                console.log(user);

            })

        this._http.GET('/personalnotes/get')
            .toPromise()
            .then(res => {
                if (res.success) {
                    this.personalNotesData = res.data.personalNotes;
                    console.log(res);
                }
                else {
                    alert("error");
                }
                this._view.setObs('loader', 'isVisible', false);
            });
    }


}
