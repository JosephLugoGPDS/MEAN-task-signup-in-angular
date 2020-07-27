import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  //creamos el objeto user
  user = {
    email: '',
    password: ''
  }

  constructor(
    private  authService: AuthService, 
    private router:Router) { }

  ngOnInit(): void {
  }

  //suscribe es la reepuesta del servidor
  signUp(){
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          //agregamos el token que capturamos
          //Guardamos el token a localStorage
          localStorage.setItem('token',res.token);
          //redireccionamos a private-tasks
          this.router.navigate(['/private']);
        },
        err => console.log(err)
      )
    
  }

}
