import { Subscription } from 'rxjs';
import { AuthService } from './Service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProjectLogger';
  isLoggedIn : boolean = false;
  sub : Subscription = new Subscription();

  constructor(private authServe : AuthService){

  }

  ngOnInit(){
    this.sub = this.authServe.sub.subscribe((data)=>{
      this.isLoggedIn = data;
    });
  }

}
