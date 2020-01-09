import { User } from './../../../../user';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
