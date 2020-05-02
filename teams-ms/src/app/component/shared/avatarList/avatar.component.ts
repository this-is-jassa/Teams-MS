import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-avatar-list',
    templateUrl: './avatar.html',
    styleUrls: ['./avatar.scss']
})
export class AvatarListComponent implements OnInit {
    
    @Input() images = []; 
    
    constructor() { }

    ngOnInit(): void { }
}
