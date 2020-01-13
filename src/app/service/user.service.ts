import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiurl = 'https://myreview-api.herokuapp.com';
  public USER_URL = `${this.apiurl}/users/user/`;
  public SAVE_UPDATE_USER_URL = `${this.apiurl}/users`;
  public AUTHENTICATE_USER_URL = `${this.apiurl}/login`;

  constructor(private httpCliente: HttpClient) { }

   postUser(user: any){
    this.httpCliente.post<any>(this.SAVE_UPDATE_USER_URL, user).subscribe(res => { 
      console.log(`this.brandListService`, {res}); 
    }, error => {
      console.log("Error", error);
    });;
  }
 
  getUser(idUser: string){
    return this.httpCliente.get(this.USER_URL + idUser);
  }
}
