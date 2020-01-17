import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public globalUser: Observable<any>;
  private apiurl = 'https://myreview-api.herokuapp.com/users/';

  public SAVE_UPDATE_USER_URL = `${this.apiurl}`;
  public AUTHENTICATE_USER_URL = `${this.apiurl}login`;

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User){
    return this.httpClient.post<User>(this.SAVE_UPDATE_USER_URL, user);
  }

  login(user: User){
    alert(user.email+user.password)
    this.globalUser = this.httpClient.post<User>(this.AUTHENTICATE_USER_URL, user);
  }

}
