import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CanActivate,  Router } from '@angular/router';
//En ves de usar el observable 
// import { Observable } from 'rxjs';
//usare el auth service usando el metodo loggedIn para validar el loggin
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,
              private router: Router){}

  canActivate(): boolean {
    if(this.authService.loggedIn()){
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }
  
}
