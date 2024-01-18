import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveAssignComponent } from './leave-assign/leave-assign.component';
import { LeaveTransactionComponent } from './leave-transaction/leave-transaction.component';
import { LeaveComponent } from './leave.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Leave Management'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'leave'
      },
      {
        path: '',
        component: LeaveComponent,
        data: {
          title: 'Leave Application'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
