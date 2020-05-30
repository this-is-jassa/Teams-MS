import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
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

    searchData = [];
    following: any[];
    searchText = '';
    avatars = environment.userImages;

    constructor(private _http: HttpService, private _data: DataService) { }

    ngOnInit(): void {
        this.$following = this._data.getFollowing().subscribe(following => {
            this.following = following;
        })
    }

    async searchUsers(text) {
        try {
            if (text === "") return
            
            const response = await this._http.GET('/users/search/' + text).toPromise();
            console.time()
            this.searchData = [...response];
            console.timeEnd()
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
    }
}
