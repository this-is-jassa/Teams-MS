import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { personalNotes } from 'src/app/implements/personalNotes';

@Component({
    selector: 'app-personal-notes',
    templateUrl: './personalNotes.html',
    styleUrls: ['./personalNotes.scss']
})
export class PersonalNotes implements OnInit {

    @Input() notesData: personalNotes[];

    indexFocus = 0;

    formModuleData = {
        editNoteForm: {
            name: '',
            message: '',
            crossOff: false,
            id: ''
        },
        newNoteForm: {
            name: '',
            message: ''
        }
    }


    constructor(private _http: HttpService) { }

    ngOnInit(): void {
        console.log(this.notesData)
    }

    crossOff(note: personalNotes, index): void {
        note.crossOff = !note.crossOff;
        this.preEdit(note, index);
        this.edit();
    }

    preEdit(note: any, index): void {
        this.formModuleData.editNoteForm.name = note.name;
        this.formModuleData.editNoteForm.message = note.message;
        this.formModuleData.editNoteForm.crossOff = note.crossOff;
        this.formModuleData.editNoteForm.id = note._id;
        this.indexFocus = index;
    }


    edit(): void {
        console.log("ss")

        this._http
            .POST('/personalnotes/update', this.formModuleData.editNoteForm)
            .toPromise()
            .then(res => {
                if (res.success) {
                    this.notesData[this.indexFocus].name = this.formModuleData.editNoteForm.name;
                    this.notesData[this.indexFocus].message = this.formModuleData.editNoteForm.message;
                    this.notesData[this.indexFocus].crossOff = this.formModuleData.editNoteForm.crossOff;
                } else {
                    alert("oops")
                }

            });

        
    }


    new(): void {
        this._http.POST('/personalnotes/post', { name: this.formModuleData.newNoteForm.name, message: this.formModuleData.newNoteForm.message })
            .toPromise()
            .then(res => {

                if(res.success) {
                    console.log(res.data)

                    this.notesData.push(res.data);
                    // Reset Form
                    this.formModuleData.newNoteForm = {
                        name: '',
                        message: '',
                    }
                }else {
                    alert("oops")
                }

            })
            .catch(error => {
                alert("oops")
            });
    }

    delete(): void {
        this._http.POST('/personalnotes/delete', { id: this.formModuleData.editNoteForm.id })
            .toPromise()
            .then(res => {
                if (res.success) {
                    this.notesData = this.notesData.filter((note, index) => {return index !== this.indexFocus})
                } else {
                    alert(" oops ");
                }
            });

    }


}


