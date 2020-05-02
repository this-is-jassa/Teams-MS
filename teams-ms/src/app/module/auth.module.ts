import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../component/auth/signin/signin.component';
import { SignUpComponent } from '../component/auth/signup/signup.component';
import { AuthFeatureRoutingModule } from '../routes/auth.route';
import { SharedModule } from './shared.module';

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    imports: [ CommonModule, AuthFeatureRoutingModule, SharedModule ],
    exports: [SignInComponent, SignUpComponent],
    providers: [],
})
export class AuthFeatureModule {}