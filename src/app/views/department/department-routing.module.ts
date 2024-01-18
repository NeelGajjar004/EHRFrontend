import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Manage Department'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'department'
      },
      {
        path: '',
        component: DepartmentComponent,
        data: {
          title: 'Department'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
