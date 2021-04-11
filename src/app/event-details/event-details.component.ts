import { EventService } from './../Service/event.service';
import { ProjectEvent } from './../Model/ProjectEvent';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    let eventDesp : String = "";

    this.eventForm = new FormGroup({
      'topic' : new FormControl(topic),
      'status': new FormControl(status),
      'eventDesp' : new FormControl(eventDesp)
    });
  }
  
  OnSubmit(){
    console.log(this.eventForm.value);
  }

}
