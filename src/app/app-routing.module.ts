import { UserProfileComponent } from './navbar/user-item/user-profile/user-profile.component';
import { UserReviewsComponent } from './navbar/user-item/user-reviews/user-reviews.component';

import { RegisterItemComponent } from './navbar/register-item/register-item.component';
import { EstablishmentReviewsComponent } from './navbar/establishment-list-item/establishment-reviews/establishment-reviews.component';
import { HomeItemComponent } from './navbar/home-item/home-item.component';
import { EstablishmentListItemComponent } from './navbar/establishment-list-item/establishment-list-item.component';


import { AddressService } from './service/address.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'',
    component: HomeItemComponent
  },
  {
    path:'establishments',
    component: EstablishmentListItemComponent
  },
  {
    path:'establishments/:id',
    component: EstablishmentReviewsComponent
  },
  {
    path:'user/register',
    component: RegisterItemComponent
  },
  {
    path:'user/profile',
    component: UserProfileComponent
  },
  {
    path:'user/reviews',
    component: UserReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
