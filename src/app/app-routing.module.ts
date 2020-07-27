import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

//guard
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  //Route por defecto
  { path: '', pathMatch: 'full', redirectTo: '/tasks' },
  //routes
  { path: 'tasks', component: TasksComponent },
  { path: 'private', component: PrivateTasksComponent,
  //protegemos la vista privada con el auth guard
    canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
