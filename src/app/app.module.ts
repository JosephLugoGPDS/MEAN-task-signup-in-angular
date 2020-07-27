import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routing
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './app.component';


//Ngbootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
//Components
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
//forms
import { FormsModule } from '@angular/forms';
//http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//guards
import { AuthGuard } from './auth.guard';
//services
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TasksComponent,
    PrivateTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
