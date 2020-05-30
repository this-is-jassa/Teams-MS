
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from '../component/navbar/navbar.component';
import { FooterComponent } from '../component/footer/footer.component';
import { LoadingComponent } from '../component/shared/loading/loading.component';
import { SearchUsersComponent } from '../component/shared/searchUsers/searchUsers.component';
import { SharedModule } from './shared.module';
import { PipesModule } from './pipes.module';


@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent,
        LoadingComponent,
        SearchUsersComponent
    ],
    imports: [ CommonModule, SharedModule, PipesModule ],
    exports: [NavBarComponent, FooterComponent, LoadingComponent],
    providers: [],
})
export class StaticModule {}
