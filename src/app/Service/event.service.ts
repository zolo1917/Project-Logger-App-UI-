import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjectEvent } from './../Model/ProjectEvent';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class EventService {

    projectEvents: ProjectEvent[] = [];
    public projectEventList = new Subject<ProjectEvent[]>();

    constructor(private httpClient: HttpClient) {
        // TODO: make backend call for getting xref values        
    }

    private setHeaders() {
        let headers = new HttpHeaders();
        headers.append('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return headers;
    }

    getProjectEvents() {
        return this.projectEvents;
    }

    /**
     * Add a new event to the list
     */
    addEvent(event: ProjectEvent) {
        this.projectEvents.push(event);
        this.projectEventList.next(this.projectEvents.slice());
        console.log("Event Added {}", this.projectEvents.slice());
    }

    /**
     * Update the eventList with the events of the new project
     */
    updateEventList(projId: number) {
        // this.projectEvents = eventList;
        this.httpClient.get('http://localhost:8080/event/getEventsForProject?id=' + projId, { headers: this.setHeaders() }).subscribe((data: any) => {
            // console.log(data);
            this.projectEventList.next(this.convertResponseDataToEvent(data));
        });

    }

    private convertResponseDataToEvent(data: any[]) {
        let eventList: ProjectEvent[] = [];
        for (var i = 0; i < data.length; i++) {
            let event: ProjectEvent = new ProjectEvent();
            event.id = data[i].id;
            event.topic = data[i].eventTopic;
            event.status = data[i].eventStatus;
            event.eventDesc = data[i].eventDescription;
            eventList.push(event);
        }
        return eventList;
    }
}
