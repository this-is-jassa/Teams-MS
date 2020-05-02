import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../component/project/project.component';
import {ProjectRoutingModule} from 'src/app/routes/project.route';


@NgModule({
    declarations: [ProjectComponent],
    imports: [ CommonModule, ProjectRoutingModule ],
    exports: [],
    providers: [],
})
export class ProjectFeatureModule {}