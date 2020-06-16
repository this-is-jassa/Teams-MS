import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment'
import { Subscription, BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-select-users',
    templateUrl: './selectUsers.html',
    styles: ['']
})

export class SelectUsersComponent implements OnInit, OnDestroy {

    @Input() blockedMembers = new Set();
    @Output() onMemberAdded = new EventEmitter()

    $following: Subscription;
    $text: Subscription;

    $_text: any = new BehaviorSubject<string>('')
    .pipe(
        debounceTime(900)
    );

    following: any[] = [];
    searchData: any[] = [];
    membersAdded: any[] = [];
    avatars = environment.userImages;

    membersName = new Set();

    constructor(private _data: DataService, private _http: HttpService) { }

    ngOnInit(): void {

        this.fetchFollowing();

        this.$text = this.$_text.subscribe(text => {
            this.searchUsers(text)
        });

    }

    toggleUser(user): void {
        const {userName} = user;

        if(this.membersName.has(userName)) {
            const index = [...this.membersName].indexOf(user.userName);
            this.membersName.delete(userName);
            this.membersAdded.splice(index, 1)
        } else {
            this.membersAdded.push(user);
            this.membersName.add(userName);
        }
        
        this.onMemberAdded.emit(this.membersAdded);
        
    }

    fetchFollowing(){
        this.$following = this._data.getFollowing().subscribe(following => {
            this.following = following;
        })
    }


    search(val: string) {
        this.$_text.next(val)
    }

    async searchUsers(text) {
        if(text === '') return;

        try {
            this.searchData = [ ...await this._http.GET('/users/search/' + text).toPromise()];
        }
        catch(err) {
            alert("Opprs")
            console.log(err);
        }
    }

    ngOnDestroy(): void {
        this.$following.unsubscribe();
        this.$text.unsubscribe();
    }

}

