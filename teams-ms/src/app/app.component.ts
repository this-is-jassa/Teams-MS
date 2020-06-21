import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}

  navVisible = false;
  innerWidth = 0;
  title = 'teams-ms';

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    
    console.log(this.innerWidth);
    if(this.innerWidth > 768){
      this.navVisible = true;
      
    }else {
      
      document.getElementById('supportedBtn').click();
    }

  }

  toggleNav() {
    this.navVisible = !this.navVisible;
  }

}
