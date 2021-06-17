import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ErklaerungMvcMvvmEtcComponent } from './erklaerung-mvc-mvvm-etc/erklaerung-mvc-mvvm-etc.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StudentenComponent } from './studenten/studenten.component';
import { DozentenComponent } from './dozenten/dozenten.component';
import { DozentDetailComponent } from './dozent-detail/dozent-detail.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ErklaerungMvcMvvmEtcComponent,
    MainNavComponent,
    StudentenComponent,
    DozentenComponent,
    DozentDetailComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    MaterialModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
