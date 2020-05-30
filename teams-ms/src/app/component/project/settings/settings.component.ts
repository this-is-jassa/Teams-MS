import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ViewService } from 'src/app/services/view.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-project-settings',
    templateUrl: './settings.html',
    styles: ['']
})
export class SettingsComponent implements OnInit {

    projectName = '';

    formsData = {
        private: true,
        public: false,
        freeze: false,
        discription: '',
        dueDate: ''
        
    }

    constructor(private _http: HttpService, private _view: ViewService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this._view.setObs('navbar', 'isVisible', true);
        this.projectName = this.activatedRoute.snapshot.paramMap.get("name");    }



}
