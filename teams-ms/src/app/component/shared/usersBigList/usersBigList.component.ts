import { Component, OnInit, Input } from '@angular/core';
import {environment} from 'src/environments/environment';

@Component({
    selector: 'app-users-list-big',
    templateUrl: './usersBigList.html',
    styleUrls: ['./usersbigList.scss']
})

export class UsersBigListComponent implements OnInit {
    
    @Input() members: any[]; 
    public badgeStyleClass = {
        'Owner': 'badge-dark',
        'Admin': 'badge-warning',
        'Developer': 'badge-info'
    }

    avatars = environment.userImages;

    constructor() { }

    ngOnInit(): void {
        console.log(this.members)
    }
}
