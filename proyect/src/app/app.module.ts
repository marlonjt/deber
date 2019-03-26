import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule, AccordionModule , TabsModule,ModalModule, ButtonsModule} from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule,MatTreeModule,MatChipsModule, MatTabsModule,MatSnackBarModule,MatCardModule, MatCheckboxModule,MatNativeDateModule,MatMenuModule,MatTableModule,MatSortModule,MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
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
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
