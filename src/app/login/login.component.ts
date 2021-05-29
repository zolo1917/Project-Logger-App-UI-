import { AuthService } from './../Service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showModalDiv: boolean = false;
  isLoggedIn: boolean = false;
  loginForm : FormGroup;
  
  constructor(private modalService: NgbModal, private authServe : AuthService) { }
  closeModal: string;
  ngOnInit(): void {
    this.initializeForm();  
  }

  private initializeForm(){
    let username: string = "";
    let password : string = "";
    this.loginForm = new FormGroup({
      "username" : new FormControl(username),
      "password" : new FormControl(password)
    });
  }
  
  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      console.log(res);
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  OnLogin (){
    // write the call for the logging in here
    // then clear the form
    this.initializeForm();
    
  }



}
