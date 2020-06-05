import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ViewService } from 'src/app/services/view.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.html',
    styleUrls: ['./project.scss']
})

export class ProjectComponent implements OnInit, OnDestroy {

    projectName: string = '';
    userImages = environment.userImages;

    userData: any;
    projectData: any;
    userInProject: any;

    $userData: Subscription;


    constructor(private activatedRoute: ActivatedRoute, private _data: DataService, private _view: ViewService, private _http: HttpService) { }

    ngOnInit(): void {
        this.projectName = this.activatedRoute.snapshot.paramMap.get("name");

        this._data.refresh();
        this._view.setObs('navbar', 'isVisible', true);

        this.$userData = this._data.getUser()
            .subscribe(me => {
                this.userData = me;
            });

        this._http.GET('/projects/get/' + this.projectName)
            .toPromise()
            .then(project => {
                this.projectData = project.data;
                this.userInProject = project.userInProject;
                console.log(!!this.userInProject)
            });

    }

    settings(): void {
        this._http.REDIRECT('project/'+ this.projectName+'/settings')
    }

    ngOnDestroy(): void {
        this.$userData.unsubscribe();
    }

    async OnstatusChanged() {
        await this._http.POST('/projects/update/member/details', {
            value: this.userInProject.status.value,
            name: this.projectName
        })
            .toPromise();
    }
}
