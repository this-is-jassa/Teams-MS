import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectComponent } from '../component/project/project.component';
import { CanActivateGuard } from '../services/authGuard.service';
import { SettingsComponent } from '../component/project/settings/settings.component';


const routes: Routes = [
    {
        path: 'project', children: [
            {path: ':name', children: [
                {path: '', component: ProjectComponent },
                {path: 'settings', component: SettingsComponent },

            ]},
        ],
        canActivate: [CanActivateGuard]
        
    },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule { }
