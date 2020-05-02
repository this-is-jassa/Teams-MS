import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignInComponent } from '../component/auth/signin/signin.component';
import { SignUpComponent } from '../component/auth/signup/signup.component';

const routes: Routes = [
    {path: 'auth', children: [
        { path: 'signin', component: SignInComponent },
        { path: 'signup', component: SignUpComponent },
        { path: '', redirectTo:'signin', pathMatch:'full'}
    ]},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthFeatureRoutingModule {}
