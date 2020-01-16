import { UserReviewsComponent } from './navbar/user-item/user-reviews/user-reviews.component';
import { UserProfileComponent } from './navbar/user-item/user-profile/user-profile.component';
import { LoginItemComponent } from './navbar/login-item/login-item.component';

import { UserItemComponent } from './navbar/user-item/user-item.component';
import { EstablishmentReviewsComponent } from './navbar/establishment-list-item/establishment-reviews/establishment-reviews.component';
import { HomeItemComponent } from './navbar/home-item/home-item.component';
import { AddressComponent } from './navbar/establishment-list-item/address/address.component';
import { RegisterItemComponent } from './navbar/register-item/register-item.component';
import { EstablishmentListItemComponent } from './navbar/establishment-list-item/establishment-list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RatingModule } from 'ng-starrating';
import { ToastComponent } from './toast/toast.component';
import { ReviewComponent } from './navbar/establishment-list-item/establishment-reviews/review/review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EstablishmentListItemComponent,
    RegisterItemComponent,
    AddressComponent,
    HomeItemComponent,
    EstablishmentReviewsComponent,
    UserItemComponent,
    UserProfileComponent,
    UserReviewsComponent,
    ToastComponent,
    LoginItemComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RatingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
