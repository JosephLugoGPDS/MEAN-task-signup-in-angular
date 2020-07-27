import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [
  ]
})
export class SigninComponent implements OnInit {

  user = {
    email:'',
    password:''

  }

  constructor(private authService:AuthService, 
                private router:Router) { }

  ngOnInit(): void {
  }

  signIn(){
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          //localstorage solo almacena strings
          console.log(res);
          //guardamos el objeto res, con su atributo token (res.token) en la variable token
          localStorage.setItem('token',res.token);
          this.router.navigate(['/private']);
        },
        err => console.log(err)
        );
    
  }

}
