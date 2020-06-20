
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ViewService } from 'src/app/services/view.service';


@Component({
    selector: 'app-project-dir',
    templateUrl: './dir.html',
    styleUrls: ['./dir.scss']
})

export class DirectoryComponent implements OnInit, OnDestroy {

    $projectSubscription: Subscription;
    $projectData = new BehaviorSubject<any>(null);


    @Input() freeze;

    @Input() set projectData(data: any) {
        this.$projectData.next(data);
    };

    get projectData() {
        return this.$projectData.getValue();
    }
    get openedDir() {
        return this.dirStructure[this.dirStructure.length - 1];
    }

    public dirStructure: any[] = [];
    public searchDirStructure: any[] = [];

    // NG MODULE
    newDirName: string = '';
    searchText: string = '';

    clipboard: string = '';

    fileToEdit: any = {};
    codeToEdit: string = ''


    constructor(private _http: HttpService, private _view: ViewService) { }

    ngOnInit(): void {

        this.$projectSubscription = this.$projectData.subscribe(project => {

            if (typeof project !== 'undefined') {

                this.getDir([project.dir])
                    .then(responseArr => {

                        this.dirStructure.push(responseArr[0]);

                        this.getDir(responseArr[0].child)
                            .then(resArr => {
                                this.dirStructure[0].child = resArr;
                                this._view.setObs('loader', 'isVisible', false);

                                console.log(this.dirStructure)
                            })

                    })
            }
        });

    }

    ngOnDestroy(): void {
        this.$projectSubscription.unsubscribe()
    }


    async edit(file) {

        if (file.fileType === 'dir') {
            var person = prompt("Please enter new name of this directory", file.name);

            if (person != null && person !== file.name) {
                await this._http.POST('/dir/update/dir', { dirId: file._id, newName: person, name: this.projectData.name }).toPromise();
                file.name = person;
            }

        }
        else {

            this.fileToEdit = file;
            this._view.setObs('loader', 'isVisible', true);
            const code = await this.getFile(file.text);
            this._view.setObs('loader', 'isVisible', false);

            this.codeToEdit = code.data.code;

            document.getElementById('editModelTrigger').click();
        }

    }

    async editFile(data) {
        try {
            await this._http.POST('/dir/update/file', { ...data, dirId: this.fileToEdit._id, name: this.projectData.name }).toPromise();
            this.fileToEdit.name = data.fileName;
        } catch (err) {
            alert('Error Occured while saving changes');
        }
    }

    async delete(file) {

        if(!confirm('Are you sure you want delete it ?')) {return}
        if(!confirm('You cannot recover this file later on. Are you sure.')) {return}
        
        const currentDir = this.openedDir;

        if(file.fileType === 'dir'){
            const isDeleted = await this._http.POST('/dir/delete', { parentDirId: currentDir._id , dirId: file._id, name: this.projectData.name }).toPromise();
        }else{
            const isDeleted = await this._http.POST('/dir/delete/file', { parentDirId: currentDir._id , dirId: file._id, name: this.projectData.name }).toPromise();
        }
        const index = currentDir.child.findIndex(id => file._id == id);
        currentDir.child.splice(index, 1);
    }


    async getDir(dirArr: any[]): Promise<any> {

        let tasks = [];

        for (const id of dirArr) {

            tasks.push(
                this._http.GET('/dir/get/' + this.projectData.name + '/' + id)
                    .toPromise()
            );

        }
        return Promise.all(tasks);
    }

    async getFile(fileId: string) { // fileId is dir Id

        return this._http.GET('/dir/get/file/' + this.projectData.name + '/' + fileId).toPromise()
    }

    async dirClick(index, searched = false) {
        this._view.setObs('loader', 'isVisible', true);

        let dirInstance = this.openedDir.child[index];
        if (searched) {
            dirInstance = this.searchDirStructure[index];
        }

        if (dirInstance.fileType === 'dir') {
            this._view.setObs('loader', 'isVisible', true);
            this.getDir(dirInstance.child)
                .then(dir => {
                    this.dirStructure.push({ child: dir, _id: dirInstance._id, fileType: 'dir', name: dirInstance.name });
                    this._view.setObs('loader', 'isVisible', false);

                })
        } else {
            this._view.setObs('loader', 'isVisible', true);
            const file = await this.getFile(dirInstance.text);

            this.clipboard = file.data.code;

            file.data.code = file.data.code.split(/\r?\n/);

            this.dirStructure.push({ ...file.data, name: dirInstance.name, fileType: dirInstance.fileType, child: [] });
            this._view.setObs('loader', 'isVisible', false);

        }
    }

    createDir(data: { fileName: string, fileType: string, codeText: string }): void {
        this._view.setObs('loader', 'isVisible', true);

        this._http.POST('/dir/post', { ...data, parentDirId: this.openedDir._id, name: this.projectData.name })
            .toPromise()
            .then(response => {
                if (!response.success) {
                    alert("Error Occured")
                } else {
                    this.dirStructure.push({ code: data.codeText.split(/\r?\n/), name: data.fileName, fileType: data.fileType, child: [], _id: response.data._id });
                }
                this._view.setObs('loader', 'isVisible', false);

            })
    }


    backDir(): void {
        this.dirStructure.pop();
    }

    dirJump(to: number): void {
        this.dirStructure = this.dirStructure.slice(0, to + 1);
    }

    copyCode(event): void {

        console.log(event.target.innerHTML)
        const element = document.createElement('textarea');
        element.value = this.clipboard;
        document.body.appendChild(element);

        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
        event.target.innerHTML = "Copied"

        let time = setInterval(function () {
            event.target.innerHTML = "Copy Code";
            clearInterval(time)
        }, 1300)

    }

    // /get/find/:name/:searchText
    async searchUsers(text) {
        if (!!text) {
            const dir = await this._http.GET('/dir/get/find/' + this.projectData.name + '/' + text).toPromise();
            this.searchDirStructure = dir.data;
        }

    }
}
