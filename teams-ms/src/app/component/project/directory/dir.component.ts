
import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { promise } from 'protractor';

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
    

    constructor(private _http: HttpService) { }

    ngOnInit(): void {

        this.$projectSubscription = this.$projectData.subscribe(project => {
            
            if(typeof project !== 'undefined') {
                
                this.getDir([project.dir])
                .then(responseArr => {
                    for(const promis of responseArr) {
                        promis.then(dir => {
                            console.log(dir.data)
                        })
                    }
                })

                // this._http.GET('/dir/get/' + project.name + '/' + project.dir )
                // .toPromise()
                // .then(data => {
                //     console.log(data);
                // });  
            }
        })
    }

    async getDir(dirArr: any[]): Promise<any> {
        
        let tasks = [];

        for(const id of dirArr) {
            
            tasks.push(
                this._http.GET('/dir/get/' + this.projectData.name + '/' + this.projectData.dir )
                .toPromise()
            );

        }
        return Promise.resolve(tasks);
    }
}
