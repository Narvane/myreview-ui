import { User } from './../user';
import { Router } from '@angular/router';
import { UserService } from './../establishments/establishment/reviews/user/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  
  @Output() userEmiter = new EventEmitter<any>();

  public user: User;
  public email;
  public password;
  public logged = false;

  router: Router;

  constructor(private userService: UserService, router: Router) { }

  ngOnInit() {
    this.logged = true;
  }

  loggedReciver(isLogged: boolean){
    this.logged = isLogged;
  }


}
