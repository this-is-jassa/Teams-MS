import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectComponent } from '../component/project/project.component';


const routes: Routes = [
    {
        path: 'project', children: [
            {path: ':name', component: ProjectComponent},
        ]
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
