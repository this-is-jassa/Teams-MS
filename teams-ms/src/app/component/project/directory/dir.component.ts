
import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { database } from 'firebase';


@Component({
    selector: 'app-project-dir',
    templateUrl: './dir.html',
    styleUrls: ['./dir.scss']
})

export class DirectoryComponent implements OnInit {

    $projectSubscription: Subscription;
    $projectData = new BehaviorSubject<any>(null);
    

    @Input() set projectData(data: any) {
        this.$projectData.next(data);
    };

    get projectData() {
        return this.$projectData.getValue();
    }
    get openedDir() {
        return this.dirStructure[this.dirStructure.length-1];
    }

    public dirStructure: any[] = [];


    constructor(private _http: HttpService) { }

    ngOnInit(): void {


        this.$projectSubscription = this.$projectData.subscribe(project => {

            if (typeof project !== 'undefined') {

                this.getDir([project.dir])
                    .then(responseArr => {

                        this.dirStructure.push(responseArr[0]);

                        this.getDir(responseArr[0].child)
                            .then(resArr => {
                                this.dirStructure[0].child = resArr;

                                console.log(this.dirStructure)
                            })

                    })
            }
        });

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
        return this._http.GET('/dir/get/file/'+ this.projectData.name +'/' + fileId).toPromise()
    }

    dirClick(index): void {
        
        const dirInstance = this.openedDir.child[index];
        
        if(dirInstance.fileType === 'dir') {
            this.getDir(dirInstance.child)
            .then(dir => {
                this.dirStructure.push({child: dir, _id: dirInstance._id, fileType: 'dir' ,name: dirInstance.name});
                console.log(dir);
            })
        }else {
            this.getFile(dirInstance.text)
            .then(file => {
                file.data.code = file.data.code.split(/\r?\n/);
                this.dirStructure.push({...file.data, name: dirInstance.name ,fileType: dirInstance.fileType, child: []});
            })
            
        }
    }

    createFile(data) {
        console.log(data);
    }

    backDir(): void {
        this.dirStructure.pop();
    }

    dirJump(to: number): void {
        this.dirStructure = this.dirStructure.slice(0, to+1);
    }
}
