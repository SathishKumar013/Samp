import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { AccessComponent } from './access/access.component';
import { DigitalComponent } from './digital/digital.component';
import { SoftwareComponent } from './software/software.component';






@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    AccessComponent,
    DigitalComponent,
    SoftwareComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

