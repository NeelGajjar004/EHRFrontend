import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { AttendanceComponent } from './views/attendance/attendance.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component : LoginComponent,
    data : {
      title:'Login'
    }
  },
  {
    path:'signup',
    component : SignupComponent,
    data : {
      title:'Sign Up'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
        import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'department',
        loadChildren: () =>
          import('./views/department/department.module').then((m) => m.DepartmentModule)
      },
      {
        path: 'designation',
        loadChildren: () =>
          import('./views/designation/designation.module').then((m) => m.DesignationModule)
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('./views/employee/employee.module').then((m) => m.EmployeeModule)
      },
      {
        path: 'leave',
        loadChildren: () =>
          import('./views/leave/leave.module').then((m) => m.LeaveModule)
      },
      {
        path: 'attendance',
        component:AttendanceComponent
      },
      
    ]
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
