import { AuthService } from './../Service/auth.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : boolean = false;
  authSub : Subscription = new Subscription();
  
  ngOnInit(): void {
    this.authSub = this.authServe.sub.subscribe((loggedIn)=>{
      this.isLoggedIn = loggedIn
      this.navToDashboard();
    });
  }

  closeResult = '';
  constructor(private modalService: NgbModal, private authServe : AuthService, private rourter : Router, private activeRoute : ActivatedRoute) {}

  // public openModel() {
  //   var modal = document.getElementById("myModal");
  //   modal.style.display = "block";
  // }

  navToDashboard() {
    if(this.isLoggedIn){
      this.rourter.navigate(['projectDashBoard'], {relativeTo : this.activeRoute});
    }
  }

}
