import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CsvgenComponent } from './csvgen/csvgen.component';
import { UploaderComponent } from './uploader/uploader.component';
import { InformationsComponent } from './csvgen/informations/informations.component';
import { FieldsComponent } from './csvgen/fields/fields.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvgenComponent,
    UploaderComponent,
    InformationsComponent,
    FieldsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
