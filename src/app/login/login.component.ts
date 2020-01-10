import { User } from './../user';
import { Router } from '@angular/router';
import { UserService } from './../establishments/establishment/reviews/user/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() isLooggedEmit = new EventEmitter<any>();

  public email;
  public password;
  public feedback: string;

  @Output() userEmiter = new EventEmitter<any>();
  
  constructor(private userService: UserService, router: Router) { }

  ngOnInit() {
  }

  login(){
    if(!this.userService.login(this.email, this.password)){
      this.email = "";
      this.password = "";
    }else{
      this.isLooggedEmit.emit(true);
    }
  }
}
