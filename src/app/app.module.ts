import { CoreModule } from './core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectListComponent } from './proj-landing/project-list/project-list.component';
import { EventLListComponent } from './proj-landing/event-llist/event-llist.component';
import { EventDetailsComponent } from './proj-landing/event-details/event-details.component';
import { ProjectDetailsComponent } from './proj-landing/project-details/project-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateEditProjectComponent } from './create-edit-project/create-edit-project.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjLandingComponent } from './proj-landing/proj-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectListComponent,
    EventLListComponent, 
    EventDetailsComponent,
    ProjectDetailsComponent,
    LoginComponent,
    SignupComponent,
    CreateEditProjectComponent,
    HomePageComponent,
    ProjLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
