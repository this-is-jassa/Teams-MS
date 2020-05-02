import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-users-list-big',
    templateUrl: './usersBigList.html',
    styleUrls: ['./usersbigList.scss']
})
export class UsersBigListComponent implements OnInit {
    
    @Input() usersData: any[]; 
    public badgeStyleClass = {
        'Owner': 'badge-dark',
        'Admin': 'badge-warning',
        'Developer': 'badge-info'
    }

    constructor() { }

    ngOnInit(): void {
        console.log(this.usersData)
    }
}
