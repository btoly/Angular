/* import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

  
{path : "form", component: FormComponent , outlet: "form"  } ,
{ path: 'home',  component: HomeComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
 */





import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { BooksComponent } from './admin/books/books.component';
import { ContactComponent } from './contact/contact.component';

import { ProfilesComponent } from './user/profiles/profiles.component';
import { InformationStudantComponent } from './pm/information-studant/information-studant.component';
import { AddInformationStudantComponent } from './pm/information-studant/add-information-studant/add-information-studant.component';
import { RegisterAdmainComponent } from './register-admain/register-admain.component';
import { SelectRegisterComponent } from './select-register/select-register.component';
import { EdutionAComponent } from './admin/books/edution-a/edution-a.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CompanyComponent } from './company/company.component';

import { InfoCompanyComponent } from './company/info-company/info-company.component';
import { QuestionsComponent } from './questions/questions.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './admin/books/business/business.component';

import { IndividualsComponent } from './admin/books/individuals/individuals.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'About',
        component: AboutComponent
    },

    {
        path: 'Question',
        component: QuestionsComponent

    },

    {
        path: 'registeradmain',
        component: RegisterAdmainComponent
    },

    {
        path: 'Upatee/:id',
        component: RegisterAdmainComponent
    },

    {
        path: 'Business/U',
        component: BusinessComponent
    },

    {
        path: 'Individuals/U',
        component: IndividualsComponent
    },
   
    { path: 'Edution/U', component: EdutionAComponent },

    {


        path:'contact',
        component: ContactComponent
    },

    

    {


        path:'resetPassword',
        component: ResetPasswordComponent
    },


    {


        path:'ChangePassword',
        component: ChangePasswordComponent
    },


    {


        path:'company',
        component: CompanyComponent
    },




{
    path:'information_Studant',
    component: InformationStudantComponent
},




{
    path:'company/Experience',
    component: InfoCompanyComponent
},



{
    path:'pm/Studants',
    component: InformationStudantComponent
},



{
    path:'Profiles',
    component: ProfilesComponent
},
{ path: 'user/users', component: UserComponent},

    { path: 'admin/books', component: BooksComponent },

    { path: 'A/U', component: AdminComponent },
        { path: 'admin/users', component: SelectRegisterComponent }
,
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
