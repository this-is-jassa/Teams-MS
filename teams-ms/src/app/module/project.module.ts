import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../component/project/project.component';
import {ProjectRoutingModule} from 'src/app/routes/project.route';
import { SharedModule } from './shared.module';
import { DirectoryComponent } from '../component/project/directory/dir.component';
import { CreateFileModelComponent } from '../component/project/models/createFile/createFile.component';


@NgModule({
    declarations: [ProjectComponent, DirectoryComponent, CreateFileModelComponent],
    imports: [ CommonModule, ProjectRoutingModule, SharedModule ],
    exports: [],
    providers: [],
})
export class ProjectFeatureModule {}