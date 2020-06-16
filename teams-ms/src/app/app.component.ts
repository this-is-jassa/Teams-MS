import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}

  navVisible = false;
  title = 'teams-ms';

  ngOnInit(): void {
    
  }

  toggleNav() {
    this.navVisible = !this.navVisible;
  }

}
