
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-profile-setting',
    templateUrl: './profileSettings.html',
    styles: ['']
})
export class ProfileSettingsComponent implements OnInit, OnDestroy {
    
    $userData: Subscription;
    userData: any = {};

    userImages = environment.userImages;

    formsData = {
        bio: '',
        avatar: 0
    }

    constructor(private _http: HttpService, private _data: DataService) { }

    ngOnInit(): void {
        this.$userData = this._data.getUser().subscribe(user => {
            this.userData = user;
            this.formsData.bio = user.bio;
            this.formsData.avatar = user.avatar;
        });
    }

    ngOnDestroy(): void {
        this.$userData.unsubscribe();
    }

    reset(): void {
        this.formsData = {bio: this.userData.bio, avatar: this.userData.avatar};
    }

    async save() {

        await this._http.POST('/users/update', this.formsData).toPromise();

        this.userData.bio = this.formsData.bio;
        this.userData.avatar = this.formsData.avatar;

        this._data.setUser({...this.userData});
        alert('Done');
    }

    changeAvatar(index) {
        this.formsData.avatar = index;
    }

}
