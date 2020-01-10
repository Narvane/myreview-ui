import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
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
