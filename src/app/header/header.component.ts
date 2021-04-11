import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showModalDiv: boolean = false;
  isLoggedIn: boolean = false;
  ngOnInit(): void {
  }

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  public openModel() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  public closeModel() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
