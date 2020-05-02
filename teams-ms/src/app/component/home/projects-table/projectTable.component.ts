import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-project-table',
    templateUrl: './projectTable.html',
    styleUrls: ['./projectTable.scss']
})
export class ProjectTableComponent implements OnInit {
    
    @Input() tableData;
    @Input() userName;
    membersModelData: any;

    constructor() { }

    ngOnInit(): void {
     
    }

    setMembersModelData(member: any) {
        this.membersModelData = member;
    }
    
}
