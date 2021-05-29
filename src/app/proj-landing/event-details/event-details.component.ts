import { FormGroup, FormControl } from '@angular/forms';
import { EventService } from '../../Service/event.service';
import { ProjectEvent } from '../../Model/ProjectEvent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  newEvent : ProjectEvent ;
  eventForm : FormGroup ; 

  constructor( private eventServ: EventService) { }

  ngOnInit(): void {
    this.initForm ();
  }

  private initForm(){
    let topic : String = "";
    let status : String = "open";
    let eventDesc : String = "";

    this.eventForm = new FormGroup({
      'topic' : new FormControl(topic),
      'status': new FormControl(status),
      'eventDesc' : new FormControl(eventDesc)
    });
  }
  
  OnSubmit(){
    this.eventServ.addEvent(this.eventForm.value);
    this.initForm();
  }

}
