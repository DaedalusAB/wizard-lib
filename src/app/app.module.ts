import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokWizardModule } from 'projects/pok-wizard/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    PokWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
