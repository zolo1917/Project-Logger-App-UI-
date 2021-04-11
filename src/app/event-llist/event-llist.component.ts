import { EventService } from './../Service/event.service';
import { ProjectEvent } from './../Model/ProjectEvent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-llist',
  templateUrl: './event-llist.component.html',
  styleUrls: ['./event-llist.component.css']
})
export class EventLListComponent implements OnInit {

  eventList : ProjectEvent[] = []
  constructor(private eventServ : EventService) {
    this.eventList = this.eventServ.getProjectEvents();
   }

  ngOnInit(): void {
  }

}
