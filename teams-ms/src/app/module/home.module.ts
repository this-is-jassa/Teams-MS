import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../component/home/home.component';
import { ProjectTableComponent } from '../component/home/projects-table/projectTable.component';
import { HeaderComponent } from '../component/home/header/header.component';
import { SharedModule } from './shared.module';
import { ProjectTableRowComponent } from '../component/home/projects-table/project-table-row/tableRow.component';
import { ProfileComponent } from '../component/profile/profile.component';
import { ProfileSettingsComponent } from '../component/profile/profileSettings/pofileSettings';


@NgModule({
    declarations: [HomeComponent, ProjectTableComponent, ProjectTableRowComponent, HeaderComponent, ProfileComponent, ProfileSettingsComponent],
    imports: [ CommonModule, SharedModule ],
    exports: [HomeComponent, HeaderComponent, ProfileComponent],
    providers: [],
})
export class HomeFeatureModule {}