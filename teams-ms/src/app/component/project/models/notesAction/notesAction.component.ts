import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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

    @Output() onEdit = new EventEmitter();
    @Output() onDelete = new EventEmitter();
    @Output() onDeleteJob = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }

    groupTagClick(groupName) {
        this.group = groupName
    }

    edit() {

        this.onEdit.emit({
            group: this.group,
            stickeyName: this.name,
            message: this.message,
            crossOff: this.crossOff
        });
    }

    delete(){
        this.onDelete.emit(true);
    }

    deleteJobDone() {
        this.onDeleteJob.emit(true);
    }
}
