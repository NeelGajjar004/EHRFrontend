import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationComponent } from './designation.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Manage Designation'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'designation'
      },
      {
        path: '',
        component: DesignationComponent,
        data: {
          title: 'Designation'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
