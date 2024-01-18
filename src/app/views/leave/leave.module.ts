import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from "@progress/kendo-angular-dialog";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveAssignComponent } from './leave-assign/leave-assign.component';
import { LeaveTransactionComponent } from './leave-transaction/leave-transaction.component';


@NgModule({
  declarations: [
    LeaveComponent,
    LeaveApplicationComponent,
    LeaveAssignComponent,
    LeaveTransactionComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    LayoutModule,
    ButtonsModule,
    DialogModule,
    DropDownsModule,
    GridModule 
  ]
})
export class LeaveModule { }
