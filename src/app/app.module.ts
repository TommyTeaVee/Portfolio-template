import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';

import { LandingComponent } from './landing/landing.component';
import { RegwizComponent } from './regwiz/regwiz.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component'
import { AngularMaterialModule } from './angular-material.module';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */



const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
   // component: ProfileComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '**',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegwizComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, config),
    ProfileModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
