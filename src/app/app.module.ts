import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {FourohfourComponent} from "./fourohfour/fourohfour.component";
import {ProjectsComponent} from "./+projects/projects.component";
import {ResumeComponent} from "./+resume/resume.component";
import {ContactComponent} from "./+contact/contact.component";
import {routing} from "./routes";
import {HomeComponent} from "./+home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireModule} from "angularfire2";
import {AdminComponent} from "./+admin/admin.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BlogComponent} from "./+blog/blog.component";
import {AdminModule} from "./+admin/admin.module";
import {RouterModule} from "@angular/router";

export const firebaseConfig = {
  apiKey: 'AIzaSyApUr9qfk1kmVl05hwBMvVKvOGz7-Ntvxg',
  authDomain: 'mikeallisononline.firebaseapp.com',
  databaseURL: 'https://mikeallisononline.firebaseio.com',
  projectId: "mikeallisononline",
  storageBucket: 'mikeallisononline.appspot.com',
  messagingSenderId: '658845182262'
};

@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    BlogComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ResumeComponent,
    ProjectsComponent,
    FourohfourComponent
  ],
  imports: [
    AdminModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
