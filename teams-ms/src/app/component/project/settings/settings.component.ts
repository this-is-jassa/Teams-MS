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
    role: string ='Developer';

    resetState: any;

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
            isFreeze: projectData.freeze.isFreeze,
        }

        this.resetState = { ...projectData }

    }

    get project() { return this.projectData }

    membersAdded = [];
    membersName = new Set();
    userImages = environment.userImages;

    formsData = {
        private: true,
        discription: '',
        endingDate: Date.now(),
        isFreeze: true,
    }

    constructor(private _http: HttpService, private _view: ViewService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.projectName = this.activatedRoute.snapshot.paramMap.get("name");

        this.fetchProject();
    }

    onMemberAdded(membersAdded): void {
        this.membersAdded = [...membersAdded];
    }
    reset(): void {
        this.project = this.resetState;
    }


    async save() {
        try {
            const payload = {
                name: this.projectName,
                ...this.formsData
            }
            await this._http.POST('/projects/update', payload).toPromise()

        } catch (err) {
            console.log(err);
            alert("Error Occured Saving")
        }

    }

    // Will be using behaviour Subject in it.
    async fetchProject() {
        this._view.setObs('loader', 'isVisible', true);

        const response = await this._http.GET('/projects/get/' + this.projectName).toPromise();
        this.project = response.data;
        this.role = response.role;

        this._view.setObs('loader', 'isVisible', false);
    }

    async addNewMembers() {
        try {
            this._view.setObs('loader', 'isVisible', true);

            let promisArr = [];

            for (const member of this.membersAdded) {
                promisArr.push(this._http.POST('/projects/post/member', { member: { name: member.userName, permission: 'Developer' }, name: this.projectName }).toPromise())
            }

            await Promise.all(promisArr);

            for (const member of this.membersAdded) {
                this.membersName.add(member.userName);
                member.name = member.userName;
                member.permission = "Developer";
                this.projectData.members.push(member);
            }
            this._view.setObs('loader', 'isVisible', false);


        } catch (err) {
            console.log(err)
            alert("error occured");
            this._view.setObs('loader', 'isVisible', false);
        }
    }

    async deleteUser(member) {
        if (!confirm('Are you sure you want to remove this user?')) return;

        await this._http.POST('/projects/delete/member', { memberName: member.name, name: this.projectName }).toPromise()

        this.fetchProject()
        this.membersName.delete(member.name);
    }

    async delete() {
        if(!confirm("Are you sure you want to delete this project")) return;

        await this._http.POST('/projects/delete',{name: this.projectName}).toPromise();
        this._http.REDIRECT('/home')
    }

    async changePermission(value: string, index: number) {
        if (!confirm('Are you sure you want to remove this user?')) return;

        const member = this.projectData.members[index];
        console.log(value)
        const payload ={
            member: {
                name: member.name,
                permission: value
            },
            name: this.projectName
        }

        await this._http.POST('/projects/update/member', payload).toPromise()
        member.permission = value;
    }

}
