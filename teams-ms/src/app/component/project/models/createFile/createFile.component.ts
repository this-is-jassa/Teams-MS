import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-create-file-model',
    templateUrl: './createFile.html',
    styleUrls: ['./createFile.scss']
})
export class CreateFileModelComponent implements OnInit {

    @Output() createFile = new EventEmitter(); 

    formData = {
        fileName: '',
        fileType: '.js',
        codeText: ''
    }
    
    constructor() { }


    fileExt: string[] = ['.js', '.php', '.java', '.txt', '.html', '.scss', '.sass', '.css', '.ts', '.c', '.cpp','.json' ,'.py']

    ngOnInit(): void { }

    newFile(){
        this.createFile.emit(this.formData);   
    }

}
