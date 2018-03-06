import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Kendo
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { DropDownListModule, AutoCompleteModule } from '@progress/kendo-angular-dropdowns';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    // Kendo
    ButtonModule,
    DialogModule,
    GridModule,
    PDFModule,
    DropDownListModule,
    AutoCompleteModule,
    PDFExportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
