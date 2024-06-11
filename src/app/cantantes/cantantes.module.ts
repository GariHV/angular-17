import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { FormComponent } from './components/form/form.component';

import {MainPageComponent} from "./pages/main-page.component";
import { TableComponent } from './components/table/table.component';

import {MatCardModule} from "@angular/material/card";
import {MatTooltip} from "@angular/material/tooltip";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    MainPageComponent,
    TableComponent,
    FormComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTooltip,
    CdkDrag,
    CdkDropList
  ]
})
export class CantantesModule { }
