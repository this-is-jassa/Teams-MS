import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-project-dir',
    templateUrl: './dir.html',
    styleUrls: ['./dir.scss']
})
export class DirectoryComponent implements OnInit {
    
    @Input() projectName;

    constructor() { }

    ngOnInit(): void { }
}
