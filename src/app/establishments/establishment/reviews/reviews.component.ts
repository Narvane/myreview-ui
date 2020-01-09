import { Router } from '@angular/router';
import { UserService } from './user/user.service';
import { User } from './../../../user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  public user: User;
  constructor(private userService: UserService, router: Router) { }

  ngOnInit() {
    this.userService.getUserObs().subscribe(res => { 
      this.user = <any> res;
    }, error => {
      alert(error)
    });
  }

}
