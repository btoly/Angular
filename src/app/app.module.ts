

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SliderImagesComponent } from './slider-images/slider-images.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectRegisterComponent } from './select-register/select-register.component';
import { ContactComponent } from './contact/contact.component';

import { CertificateComponent } from './certificate/certificate.component';
import { SettingsIndComponent } from './settings-ind/settings-ind.component';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';

import { UserDetailsComponent } from './user-details/user-details.component';
import { BooksComponent } from './admin/books/books.component';
import { AddbookComponent } from './admin/books/addbook/addbook.component';
import { ViewbookComponent } from './admin/books/viewbook/viewbook.component';
import { UserSelectComponent } from './user-select/user-select.component';


import { ProfilesComponent } from './user/profiles/profiles.component';
import { InformationStudantComponent } from './pm/information-studant/information-studant.component';
import { AddInformationStudantComponent } from './pm/information-studant/add-information-studant/add-information-studant.component';
import { ViewInformationStudantComponent } from './pm/information-studant/view-information-studant/view-information-studant.component';
import { RegisterAdmainComponent } from './register-admain/register-admain.component';
import { EdutionAComponent } from './admin/books/edution-a/edution-a.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CompanyComponent } from './company/company.component';

import { InfoCompanyComponent } from './company/info-company/info-company.component';
import { AddExperienceComponent } from './company/info-company/add-experience/add-experience.component';

import { FooterComponentComponent } from './footer-component/footer-component.component';

import { DisplayComponent } from './company/info-company/display/display.component';
import { QuestionsComponent } from './questions/questions.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './admin/books/business/business.component';

import { IndividualsComponent } from './admin/books/individuals/individuals.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { EditUserComponent } from './edit-user/edit-user.component'; 



@NgModule({
  declarations: [

    DisplayComponent,
    AppComponent,
    LoginComponent,

    NavbarComponent,


    FormComponent,

    BackgroundComponent,

    HomeComponent,

    SliderImagesComponent,



    PageNotFoundComponent,



    SelectRegisterComponent,



    ContactComponent,





    AddExperienceComponent,

    CertificateComponent,



    SettingsIndComponent,



    RegisterComponent,

    AddInformationStudantComponent,


ProfilesComponent,


    PmComponent,



    AdminComponent,
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    FormComponent,
    PmComponent,

    UserDetailsComponent,
    BooksComponent,
    AddbookComponent,
    ViewbookComponent,
    UserSelectComponent,

  
  UserComponent,

  
  InformationStudantComponent,

  
  AddInformationStudantComponent,

  
  ViewInformationStudantComponent,

  
  RegisterAdmainComponent,

  
  EdutionAComponent,

  
  ResetPasswordComponent,

  
  ChangePasswordComponent,

  
  CompanyComponent,





  AddExperienceComponent,


  
  InfoCompanyComponent,


  
  FooterComponentComponent,


  



  
  DisplayComponent,


  



  
  QuestionsComponent,


  



  
  AboutComponent,


  



  
  BusinessComponent,



  
  IndividualsComponent,



  
  EditUserComponent,





  ],
  imports: [

    NgxPaginationModule,
    MatDialogModule,

    AppRoutingModule,
    FormsModule,

 
    CustomFormsModule,

    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,


    FormsModule ,
    BrowserModule,
    NgbModule,


  
   
    HttpClientModule,

    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

