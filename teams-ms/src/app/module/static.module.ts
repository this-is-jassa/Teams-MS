
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from '../component/navbar/navbar.component';
import { FooterComponent } from '../component/footer/footer.component';
import { LoadingComponent } from '../component/shared/loading/loading.component';
import { SharedModule } from './shared.module';

@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent,
        LoadingComponent
    ],
    imports: [ CommonModule, SharedModule ],
    exports: [NavBarComponent, FooterComponent, LoadingComponent],
    providers: [],
})
export class StaticModule {}
