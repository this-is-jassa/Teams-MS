import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ViewService } from 'src/app/services/view.service';
import { DataService } from 'src/app/services/data.service';
import { Subscription, from } from 'rxjs';
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
        // this._data.refreshData();
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




    // HTTP REQUEST Functions Down Below

    // Fetching All the necessory data from server






    // reqNewPNote() {

    //     this._view.setObs('loader', 'isVisible', true);

    //     this._http.POST('/personalnotes/post', { name: this.formModuleData.NewPNoteForm.name, message: this.formModuleData.NewPNoteForm.message })
    //         .toPromise()
    //         .then(res => {
    //             this.personalNotesData.push(res.data);

    //             // Reset Form
    //             this.formModuleData.NewPNoteForm = {
    //                 _id: '',
    //                 name: '',
    //                 message: '',
    //                 crossOff: false,
    //                 index: 0
    //             }

    //             // Exit Loader
    //             this._view.setObs('loader', 'isVisible', false);
    //         })
    //         .catch(error => {
    //             alert("Error Occured Loading The forms")
    //         });

    // }

    // deletePnote(data, index) {
    //     this._view.setObs('loader', 'isVisible', true);

    //     this._http.POST('/personalnotes/delete', { id: data._id })
    //         .toPromise()
    //         .then(res => {
    //             this._view.setObs('loader', 'isVisible', false);
    //         });

    //     if (this.personalNotesData[0] === data) {
    //         this.personalNotesData.shift();
    //     } else {
    //         this.personalNotesData = this.personalNotesData.splice(0, index).concat(this.personalNotesData.splice(index));
    //     }
    // }

    // async reqEditPNote(data, index) {

    //     this._view.setObs('loader', 'isVisible', true);

    //     const editReq = await this._http.POST('/personalnotes/update',
    //         {
    //             name: data.name,
    //             message: data.message,
    //             crossOff: data.crossOff,
    //             id: data._id
    //         })
    //         .toPromise()
    //         .then(res => {
    //             this._view.setObs('loader', 'isVisible', false);
    //             this.personalNotesData[index] = data;
    //         });

    // }


}
