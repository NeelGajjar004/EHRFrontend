import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DocsComponentsModule } from '../../../components/docs-components.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeExperienceComponent } from './employee-experience/employee-experience.component';
import { EmployeeQualificationComponent } from './employee-qualification/employee-qualification.component';
import { EmployeeDocumentComponent } from './employee-document/employee-document.component';
import { EmployeeComponent } from './employee.component';
import { IconModule } from '@coreui/icons-angular';

import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from "@progress/kendo-angular-dialog";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LabelModule } from "@progress/kendo-angular-label";

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  NavbarModule,
  NavModule,
  TabsModule,
  SharedModule,
  UtilitiesModule
} from '@coreui/angular';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeExperienceComponent,
    EmployeeQualificationComponent,
    EmployeeDocumentComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    NavbarModule,
    CollapseModule,
    NavModule,
    TabsModule,
    NavbarModule,
    LayoutModule,
    ButtonsModule,
    DialogModule,
    DropDownsModule,
    LabelModule     
  ]
})
export class EmployeeModule { }
