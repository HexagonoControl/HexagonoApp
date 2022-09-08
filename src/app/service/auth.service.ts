import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _users!: Users;

  get users() {
    return { ...this._users };
  }
  redirectUrl: string | undefined;
  baseUrl = environment.baseUrl;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  public userlogin(username:any, password:any) {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(Users => {
    this.setToken(Users[0].id_user);
    this.getLoggedInName.emit(true);
    return Users;
    }));
    }

    public userregistration(email,pwd,nit,razon,repres,
      ciiu,country,dpto,city,terminos,admin) {
      return this.httpClient.post<any>(this.baseUrl + '/register.php', { email,pwd
        ,nit,razon,repres,
        ciiu,country,dpto,city,terminos,admin })
      .pipe(map(Users => {
      return Users;
      }));
      }

    
//token
setToken(token: string) {
  localStorage.setItem('id_user', token);
  }
  getToken() {
  return localStorage.getItem('id_user');
  }
  deleteToken() {
  localStorage.removeItem('id_user');
  }


   
   getUserLogged() {
    const token = this.getToken();
    console.log(token);
    
    // Aquí iría el endpoint para devolver el usuario para un token
  }


  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }

}