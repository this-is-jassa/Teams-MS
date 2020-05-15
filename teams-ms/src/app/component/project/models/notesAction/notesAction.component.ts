import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-notes-action-model',
    templateUrl: './notesAction.html',
    styleUrls: ['./notesAction.scss']
})
export class NotesActionModelComponent implements OnInit {

    @Input() groups: any[];
    @Input() name = '';
    @Input() message = '';
    @Input() group = '';
    @Input() crossOff: boolean = false;

    constructor() { }

    ngOnInit(): void { }

    groupTagClick(groupName) {
        this.group = groupName
    }
}
