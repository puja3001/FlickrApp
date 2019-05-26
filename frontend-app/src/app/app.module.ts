import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importing the Http Client Module to use http client for making API calls and intercepting the calls
import { HttpClientModule } from "@angular/common/http";

//Services
import { ApiService } from './services/api.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//For tags input
import{ TagInputModule } from 'ngx-chips';

//importing all the components
import { HomeComponent } from './templates/home/home.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { LayoutComponent } from './templates/layout/layout.component';

//For loading spinner while waiting for results
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TagInputModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    ApiService,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
