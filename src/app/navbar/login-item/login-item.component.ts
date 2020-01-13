import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-item',
  templateUrl: './login-item.component.html',
  styleUrls: ['./login-item.component.css']
})
export class LoginItemComponent implements OnInit {
  @Output() isLooggedEmit = new EventEmitter<any>();

  public email;
  public password;
  public feedback: string;

  @Output() userEmiter = new EventEmitter<any>();
  
  constructor(private userService: UserService, router: Router) { 

  }

  ngOnInit() {
  }


}
