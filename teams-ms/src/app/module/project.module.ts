import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../component/project/project.component';
import {ProjectRoutingModule} from 'src/app/routes/project.route';
import { SharedModule } from './shared.module';
import { DirectoryComponent } from '../component/project/directory/dir.component';
import { CreateFileModelComponent } from '../component/project/models/createFile/createFile.component';
import { TasksComponent } from '../component/project/tasks/tasks.component';
import { NotesActionModelComponent } from '../component/project/models/notesAction/notesAction.component';
import { LogsComponent } from '../component/project/logs/logs.component';
import { PipesModule } from './pipes.module';


@NgModule({
    declarations: [ProjectComponent, DirectoryComponent, CreateFileModelComponent, TasksComponent, NotesActionModelComponent, LogsComponent ],
    imports: [ CommonModule, ProjectRoutingModule, SharedModule, PipesModule],
    exports: [],
    providers: [],
})
export class ProjectFeatureModule {}