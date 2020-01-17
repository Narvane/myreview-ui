import { ToastService } from './../../service/toast.service';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-item',
  templateUrl: './login-item.component.html',
  styleUrls: ['./login-item.component.css']
})
export class LoginItemComponent implements OnInit {
  @Output() isLooggedEmit = new EventEmitter<any>();
  public user: User = new User();
  
  constructor(private userService: UserService, private toastService: ToastService) { 

  }

  ngOnInit() {
  }

  login(){
    this.userService.login(this.user);
    this.userService.globalUser
     .subscribe(res => { 
        this.user = <any> res
        this.isLooggedEmit.emit(true);
        this.toastService.show('Você foi logado com sucesso!', {
          classname: 'bg-success text-light',
          delay: 5000 ,
          autohide: true,
          headertext: 'Faça suas avaliações!'
        });
      }, 
      err =>{ 
        console.log(err);
        this.isLooggedEmit.emit(false);
        this.toastService.show('Confira seus dados!', {
          classname: 'bg-danger text-light',
          delay: 5000 ,
          autohide: true,
          headertext: 'Credenciais não conferem!'
        });
      });
  } 

}
