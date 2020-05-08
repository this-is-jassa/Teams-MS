import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StaticModule } from './module/static.module';
import { AuthFeatureModule } from './module/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CanActivateGuard } from './services/authGuard.service';
import { HomeFeatureModule } from './module/home.module';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { TokenInterceptor } from './services/http.interseptor';
import { ViewService } from './services/view.service';

import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import { DataService } from './services/data.service';
import { ProjectFeatureModule } from './module/project.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaticModule,
    AuthFeatureModule,
    HttpClientModule,
    HomeFeatureModule,
    ProjectFeatureModule
    
  ],
  providers: [
    AuthService,
    HttpService,
    CanActivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ViewService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(environment.firebaseConfig);
  }
}
