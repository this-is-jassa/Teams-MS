import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-edit-file',
    templateUrl: './editFile.html',
    styles: ['']
})

export class EditFileModelComponent implements OnInit {

    @Input() fileName = '';
    @Input() codeText = '';
    @Output() onSave = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }

    save() {
        this.onSave.emit({ fileName: this.fileName, codeText: this.codeText });
    }
}
