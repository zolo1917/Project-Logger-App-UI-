import { ProjectDetailsComponent } from './project-details/project-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEditProjectComponent } from './create-edit-project/create-edit-project.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path : ':id', component : ProjectDetailsComponent},
    { path : 'login', component: LoginComponent},
    { path : 'signup', component: SignupComponent},
    { path : 'createEditProject', component: CreateEditProjectComponent},
    { path : 'creteEvent', component : EventDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
