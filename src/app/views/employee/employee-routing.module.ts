import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeExperienceComponent } from './employee-experience/employee-experience.component';
import { EmployeeQualificationComponent } from './employee-qualification/employee-qualification.component';
import { EmployeeDocumentComponent } from './employee-document/employee-document.component';
import { EmployeeComponent } from './employee.component';

// const routes: Routes = [];

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Manage Employee'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'employee'
      },
      {
        path: '',
        component: EmployeeComponent,
        data: {
          title: 'Employee'
        }
      },
      // {
      //   path: 'employee-qualifications',
      //   component: EmployeeQualificationComponent,
      //   data: {
      //     title: 'Employee Qualifications'
      //   }
      // },
      // {
      //   path: 'employee-documents',
      //   component: EmployeeDocumentComponent,
      //   data: {
      //     title: 'Employee Documents'
      //   }
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
