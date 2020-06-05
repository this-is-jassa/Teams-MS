import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from '../component/shared/checklist/checklist.component';
import { FormsModule } from '@angular/forms';
import { AvatarListComponent } from '../component/shared/avatarList/avatar.component';
import { UsersBigListComponent } from '../component/shared/usersBigList/usersBigList.component';
import { NewProjectComponent } from '../component/shared/model/newProject/newProject.component';
import { ChatComponent } from '../component/shared/chat/chat.component';
import { PersonalNotes } from '../component/personalNotes/personalNotes.component';
import { SelectUsersComponent } from '../component/shared/selectUsers/selectUsers.component';
import { PipesModule } from './pipes.module';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [ChecklistComponent, AvatarListComponent, UsersBigListComponent, NewProjectComponent, ChatComponent, PersonalNotes, SelectUsersComponent ],
    imports: [ CommonModule, FormsModule, PipesModule, RouterModule ],
    exports: [ChecklistComponent, FormsModule, AvatarListComponent, UsersBigListComponent, NewProjectComponent, ChatComponent, PersonalNotes, SelectUsersComponent, RouterModule], 
    providers: [],
})
export class SharedModule {}