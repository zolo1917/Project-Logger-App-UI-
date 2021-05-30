import { ProjLandingComponent } from './proj-landing/proj-landing.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './proj-landing/project-details/project-details.component';
import { CreateEditProjectComponent } from './create-edit-project/create-edit-project.component';
import { EventDetailsComponent } from './proj-landing/event-details/event-details.component';

const routes: Routes = [
    { path: '', redirectTo : '/home', pathMatch: 'full'},
    { path : 'home', component : HomePageComponent},
    { path : 'projectDashBoard', component : ProjLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
