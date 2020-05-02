import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-project',
    templateUrl: './project.html',
    styleUrls: ['./project.scss']
})
export class ProjectComponent implements OnInit {
    projectName: string =''
    
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.projectName = this.activatedRoute.snapshot.paramMap.get("name")
    }
}
