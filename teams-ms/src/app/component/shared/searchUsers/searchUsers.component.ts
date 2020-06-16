import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { environment } from 'src/environments/environment'

@Component({
    selector: 'app-search-users',
    templateUrl: './searchUsers.html',
    styles: ['']
})
export class SearchUsersComponent implements OnInit, OnDestroy {

    @Input() buttonText = '';
    @Output() onUserSelected: EventEmitter<any> = new EventEmitter();

    $following: Subscription;
    $text: Subscription;

    $_text: any = new BehaviorSubject<string>('')
    .pipe(
        debounceTime(900)
    );
    

    searchData = [];
    following: any[];

    avatars = environment.userImages;

    constructor(private _http: HttpService, private _data: DataService) { }

    ngOnInit(): void {
        this.$following = this._data.getFollowing().subscribe(following => {
            this.following = following;
        });

        this.$text = this.$_text.subscribe(text => {
            this.searchUsers(text)
        })

    }

    search(val) {
        this.$_text.next(val);
    }

    async searchUsers(text) {

        try {
            if (text === "") return
            
            const response = await this._http.GET('/users/search/' + text)
            .pipe(
                debounceTime(10000)
            )
            .toPromise();
            this.searchData = [...response];
        }
        catch (err) {
            alert('Error Occured');
            console.log(err);
        }
    }

    buttonClicked(user): void {
        this.onUserSelected.emit(user)
    }

    ngOnDestroy(): void {
        this.$following.unsubscribe();
        this.$text.unsubscribe();
    }
}
