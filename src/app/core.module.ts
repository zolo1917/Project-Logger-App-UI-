import { AuthService } from './Service/auth.service';
import { EventService } from './Service/event.service';
import { ProjectService } from './Service/project.service';
import { NgModule } from "@angular/core";

@NgModule({
    providers : [ProjectService, EventService, AuthService]
})
export class CoreModule{}