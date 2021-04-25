import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Project } from './../Model/Project';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../Service/project.service';

@Component({
  selector: 'app-create-edit-project',
  templateUrl: './create-edit-project.component.html',
  styleUrls: ['./create-edit-project.component.css']
})
export class CreateEditProjectComponent implements OnInit {

  project : Project = new Project();
  projectForm : FormGroup;
  closeModal: string;
  constructor(private modalService: NgbModal,private projServ : ProjectService) { }
  
  ngOnInit(): void {
    this.initProjectForm(new Project());  
  }

  initProjectForm(proj : Project){
    this.projectForm = new FormGroup({
      'name' : new FormControl(proj.name),
      'summary' : new FormControl(proj.summary),
      'details' : new FormControl(proj.details)
    });
  }

  onCreateProject(){
    console.log(this.projectForm.value);
    this.projServ.addProject(this.projectForm.value);
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

}
