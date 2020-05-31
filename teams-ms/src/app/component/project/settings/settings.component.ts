import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ViewService } from 'src/app/services/view.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-project-settings',
    templateUrl: './settings.html',
    styles: ['']
})
export class SettingsComponent implements OnInit {

    projectName = '';
    projectData: any;

    membersAdded = [];
    membersName = new Set();
    userImages = environment.userImages;

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
        this.projectName = this.activatedRoute.snapshot.paramMap.get("name");

        this.fetchProject();
    }

    async fetchProject() {
        const response = await this._http.GET('/projects/get/' + this.projectName).toPromise();
        this.projectData = response.data;

        const {members} = this.projectData;
        for(const member of members) {
            this.membersName.add(member.userName)
        }
    }

    onMemberAdded(membersAdded): void {
        this.membersAdded = membersAdded;
    }

    async deleteUser(member, index) {
        if(!confirm('Are you sure you want to remove this user?')) return;
        
        await this._http.POST('/projects/delete/member', {memberName: member.name, name: this.projectName}).toPromise()
        
        this.membersName.delete(member.name);
        this.projectData.members.slice(index,1);
    }


}
