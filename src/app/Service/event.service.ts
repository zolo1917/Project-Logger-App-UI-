import { ProjectEvent } from './../Model/ProjectEvent';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
    
    projectEvents : ProjectEvent[] = [];
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

    /**
     * Update the eventList with the events of the new project
     */
    updateEventList(eventList : ProjectEvent[]){
        this.projectEvents = eventList;
        this.projectEventList.next(eventList);
    }
}
