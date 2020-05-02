import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.html',
    styleUrls: ['./loading.scss']
})
export class LoadingComponent implements OnInit {
    
    @Input() isVisible: boolean = false;

    constructor(private _view: ViewService) { }

    ngOnInit(): void {
        this._view.getObs()
        .subscribe(data => {
            this.isVisible = data.loader.isVisible;
        });
    }
}
