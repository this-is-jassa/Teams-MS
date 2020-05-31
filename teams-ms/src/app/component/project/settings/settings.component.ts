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
    private projectData: any;

    set project(projectData) {

        const { members } = projectData;
        for (const member of members) {
            this.membersName.add(member.name)
        }

        this.projectData = projectData;
        this.formsData = {
            private: projectData.private,
            discription: projectData.discription,
            endingDate: projectData.endingDate,
            freeze: projectData.freeze.isFreeze,
        }
       
    }

    get project() { return this.projectData }

    membersAdded = [];
    membersName = new Set();
    userImages = environment.userImages;

    formsData = {
        private: true,
        discription: '',
        endingDate: Date.now(),
        freeze: true,

    }

    constructor(private _http: HttpService, private _view: ViewService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this._view.setObs('navbar', 'isVisible', true);
        this.projectName = this.activatedRoute.snapshot.paramMap.get("name");

        this.fetchProject();
    }

    async fetchProject() {
        const response = await this._http.GET('/projects/get/' + this.projectName).toPromise();
        this.project = response.data;
    }


    onMemberAdded(membersAdded): void {
        this.membersAdded = [...membersAdded];
        console.log(this.membersAdded)
    }

    async addNewMembers() {
        try {
            let promisArr = [];
    
            for(const member of this.membersAdded) {
                promisArr.push(this._http.POST('/projects/post/member', {member: {name: member.userName, permission: 'Developer'}, name: this.projectName}).toPromise())
            }

            await Promise.all(promisArr);

            for(const member of this.membersAdded) {
                this.membersName.add(member.userName);
                member.name = member.userName;
                member.permission = "Developer";
                this.projectData.members.push(member);
            }

        } catch(err) {
            console.log(err)
            alert("error occured")
        }
    }

    async deleteUser(member, index) {
        if (!confirm('Are you sure you want to remove this user?')) return;

        await this._http.POST('/projects/delete/member', { memberName: member.name, name: this.projectName }).toPromise()

        this.fetchProject()
        this.membersName.delete(member.name);
        
    }

    async changePermission() {
        if (!confirm('Are you sure you want to remove this user?')) return;

    }

}
