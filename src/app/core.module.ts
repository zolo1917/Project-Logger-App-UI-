import { EventService } from './Service/event.service';
import { ProjectService } from './Service/project.service';
import { NgModule } from "@angular/core";

@NgModule({
    providers : [ProjectService, EventService]
})
export class CoreModule{}