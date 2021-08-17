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
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatTooltipModule } from '@angular/material/tooltip';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CsvgenComponent } from './csvgen/csvgen.component';
import { UploaderComponent } from './csvgen/uploader/uploader.component';
import { InformationsComponent } from './csvgen/informations/informations.component';
import { FieldsComponent } from './csvgen/fields/fields.component';
import { SpinnerComponent,DialogSpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvgenComponent,
    UploaderComponent,
    InformationsComponent,
    FieldsComponent,
    SpinnerComponent,
    DialogSpinnerComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTooltipModule,
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
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
