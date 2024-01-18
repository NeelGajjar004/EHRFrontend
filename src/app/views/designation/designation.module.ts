import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { DocsComponentsModule } from '../../../components/docs-components.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from "@progress/kendo-angular-dialog";
import { DesignationRoutingModule } from './designation-routing.module';
import { DesignationComponent } from './designation.component';



@NgModule({
  declarations: [DesignationComponent],
  imports: [
    DesignationRoutingModule,
    GridModule,
    ButtonsModule,
    DialogModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DocsComponentsModule
  ]
})
export class DesignationModule { }
