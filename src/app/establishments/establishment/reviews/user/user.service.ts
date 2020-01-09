import { User } from './../../../../user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: Observable<any>;

  private apiurl = 'https://myreview-api.herokuapp.com/';
  public USER_URL = `${this.apiurl}/user/`;
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

  authenticate(email: any, senha: any): Observable<any>{
    return this.httpCliente.post<any>(this.AUTHENTICATE_USER_URL + email, senha);
  }

  login(email: any, senha: any): boolean{
    this.httpCliente.post<any>(this.AUTHENTICATE_USER_URL + email, senha).subscribe(res => { 
      this.user = <any> res;
    }, error => {
      alert(error+"Falha no login")
    });
    if(this.user != null){
      return true;
    }
  }

  getUserObs(): Observable<any>{
    return this.user;
  }
}
