import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ViewService } from 'src/app/services/view.service';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { personalNotes } from 'src/app/implements/personalNotes';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})

export class HomeComponent implements OnInit {

    personalNotes: personalNotes[] = [];
    pendingNotes = 0;

    get personalNotesData() {
        return this.personalNotes;
    }

    set personalNotesData(data) {
        this.personalNotes = [...data];

        for (const note of data) {
            if (note.crossOff) continue;
            this.pendingNotes++;
        }
    }

    userData;
    userImage: string = ''

    // Observables *** Make Sure to Unsubscribe in ngOnDestroy function to prevent data leak ***
    private $userObs: Subscription;


    constructor(private _http: HttpService, private _data: DataService) { }


    ngOnInit(): void {

        this.fetchData();
    }

    ngOnDestroy(): void {
        this.$userObs.unsubscribe();
    }

    private fetchData(): void {

        this.$userObs = this._data.getUser()
            .subscribe(user => {
                this.userData = user;
                this.userImage = environment.userImages[user.avatar]
            })

        this._http.GET('/personalnotes/get')
            .toPromise()
            .then(res => {
                if (res.success) {
                    this.personalNotesData = res.data.personalNotes;
                }
                else {
                    alert("error");
                }
            });
    }

}
