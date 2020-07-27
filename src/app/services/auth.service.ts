import { Injectable } from '@angular/core';

//http
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient,
              private router: Router) { }

  signUp(user) {
    //cast a any
    return this.http.post<any>(this.URL + '/signup', user)
  }
  signIn(user) {
    //cast a any
    return this.http.post<any>(this.URL + '/signin', user)
  }

  loggedIn() {
    // loggedIn(): boolean {
    // if(localStorage.getItem('token'));{
    //   return true;
    // }
    return !!localStorage.getItem('token');
    
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
