
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

    async getDir(dirArr: any[]): Promise<any> {
        this._view.setObs('loader', 'isVisible', true);

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
        this._view.setObs('loader', 'isVisible', true);

        return this._http.GET('/dir/get/file/' + this.projectData.name + '/' + fileId).toPromise()
    }

    dirClick(index, searched = false): void {
        this._view.setObs('loader', 'isVisible', true);

        let dirInstance = this.openedDir.child[index];
        if (searched) {
            dirInstance = this.searchDirStructure[index];
        }

        if (dirInstance.fileType === 'dir') {
            this.getDir(dirInstance.child)
                .then(dir => {
                    this.dirStructure.push({ child: dir, _id: dirInstance._id, fileType: 'dir', name: dirInstance.name });
                    this._view.setObs('loader', 'isVisible', false);

                })
        } else {
            this.getFile(dirInstance.text)
                .then(file => {
                    this.clipboard = file.data.code;

                    file.data.code = file.data.code.split(/\r?\n/);

                    this.dirStructure.push({ ...file.data, name: dirInstance.name, fileType: dirInstance.fileType, child: [] });
                    this._view.setObs('loader', 'isVisible', false);

                })
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
