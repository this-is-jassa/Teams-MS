import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CanActivateGuard } from './services/authGuard.service';
import { ProfileComponent } from './component/profile/profile.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [CanActivateGuard]},
  {path: 'profile', children: [
    {path: ':userName', component: ProfileComponent}
  ],
  canActivate: [CanActivateGuard]
},
  {path: '', redirectTo:'auth/signin', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
