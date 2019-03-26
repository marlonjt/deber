import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatInputModule, 
        MatAutocompleteModule, MatSelectModule, MatDatepickerModule,
        MatNativeDateModule, MatTabsModule, MatMenuModule, MatTableModule,MatSortModule,
        MatSnackBarModule,MatCardModule,MatTreeModule,MatChipsModule} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BENITOJUAREZComponent } from './benito-juarez/benito-juarez.component';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [FormularioComponent, BENITOJUAREZComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    FormsModule,
    AccordionModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatTabsModule,
    MatSnackBarModule,
    MatCardModule,
    MatTreeModule,
    MatChipsModule
  ]
})
export class FormularioModule { }
