import { UserService } from './../../../service/user.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.css']
})
export class UserReviewsComponent implements OnInit {
  public user: User;
  constructor(private userService: UserService, router: Router) { }

  ngOnInit() {
  }

}
