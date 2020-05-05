
import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BehaviorSubject, Subscription } from 'rxjs';


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

    public dirStructure: any;
    public activeDirStructure: any[] = []


    constructor(private _http: HttpService) { }

    ngOnInit(): void {


        this.$projectSubscription = this.$projectData.subscribe(project => {

            if (typeof project !== 'undefined') {

                this.getDir([project.dir])
                    .then(responseArr => {

                        this.dirStructure = responseArr[0];

                        this.getDir(responseArr[0].child)
                            .then(resArr => {
                                this.dirStructure.child = resArr
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

    dirClick(index): void {
        this.getDir(this.dirStructure.child[index].child)
        .then(dir => {
            this.dirStructure = {child: dir};
            console.log(dir);
        })
    }
}
