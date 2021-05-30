import { AuthService } from './../Service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  signUpForm : FormGroup;
  constructor(private modalService: NgbModal, private authServ : AuthService) { }
  closeModal: string;
  ngOnInit(): void {
    this.initializeSignUpForm()
  }

  private initializeSignUpForm(){
    let username : string;
    let password : string;
    let confirmPassword : string;
    let email : string;

    this.signUpForm = new FormGroup({
      "username" : new FormControl(username),
      "password" : new FormControl(password),
      "confirmPassword" : new FormControl(confirmPassword),
      "email" : new FormControl(email)
    });

  }

  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
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

  OnSignup(){
    // update the signup form 
    // console.log(this.signUpForm.value);
    this.authServ.OnSignUp(this.signUpForm.value);
  }
}
