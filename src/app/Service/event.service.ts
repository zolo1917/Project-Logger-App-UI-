import { ProjectEvent } from './../Model/ProjectEvent';
import { Injectable } from "@angular/core";

@Injectable()
export class EventService {
    
    projectEvents : ProjectEvent[] = [{eventTopic : "Test event 1", status : "open", description : "this is a test description for the event"}, {eventTopic : "Test event 2", status : "Review", description : "this is a test description for the event under review"}];

    getProjectEvents(){
        return this.projectEvents;
    }

    /**
     * Add a new event to the list
     */
    addEvent(event : ProjectEvent) {
        this.projectEvents.push(event);
        console.log("Event Added");
    }
}
