import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : boolean = false;
  
  ngOnInit(): void {
  }

  closeResult = '';
  constructor(private modalService: NgbModal) {}

  // public openModel() {
  //   var modal = document.getElementById("myModal");
  //   modal.style.display = "block";
  // }

}
