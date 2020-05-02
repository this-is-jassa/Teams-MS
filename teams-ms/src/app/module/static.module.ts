
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from '../component/navbar/navbar.component';
import { FooterComponent } from '../component/footer/footer.component';
import { LoadingComponent } from '../component/shared/loading/loading.component';

@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent,
        LoadingComponent
    ],
    imports: [ CommonModule ],
    exports: [NavBarComponent, FooterComponent, LoadingComponent],
    providers: [],
})
export class StaticModule {}
