import { ProjectEvent } from './../Model/ProjectEvent';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
    
    projectEvents : ProjectEvent[] = [{topic : "Test event 1", status : "open", eventDesc : "this is a test description for the event"}, {topic : "Test event 2", status : "Review", eventDesc : "this is a test description for the event under review"}];
    public projectEventList = new Subject<ProjectEvent[]>();
    getProjectEvents(){
        return this.projectEvents;
    }

    /**
     * Add a new event to the list
     */
    addEvent(event : ProjectEvent) {
        this.projectEvents.push(event);
        this.projectEventList.next(this.projectEvents.slice());
        console.log("Event Added {}", this.projectEvents.slice());
    }
}
