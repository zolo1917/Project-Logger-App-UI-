import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Project } from './../Model/Project';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  isEdit : boolean = false;

  @ViewChild("projectDetails") projDetailsModel;

  constructor(private modalService: NgbModal,private projServ : ProjectService) { }
  
  ngOnInit(): void {
    this.initProjectForm(new Project());
    this.projServ.editSelectedProject.subscribe((data : Project)=>{
      this.isEdit = true;
      this.initProjectForm(data);
      this.triggerModal(this.projDetailsModel);
    });
  }

  initProjectForm(proj : Project){
    if(!this.isEdit){
      this.projectForm = new FormGroup({
        'name' : new FormControl(proj.name),
        'summary' : new FormControl(proj.summary),
        'details' : new FormControl(proj.details)
      });
    }else {
      this.projectForm = new FormGroup({
        'id' : new FormControl(proj.id),
        'name' : new FormControl(proj.name),
        'summary' : new FormControl(proj.summary),
        'details' : new FormControl(proj.details)
      });
    }
    
  }

  onCreateProject(){
    if(this.isEdit){
      this.projServ.updateProject(this.projectForm.value.id, this.projectForm.value);
    }else {
      this.projServ.addProject(this.projectForm.value);
    }
    
  }
  onCreateNewProject(){
    this.isEdit = false;
    this.initProjectForm(new Project());
    this.triggerModal(this.projDetailsModel);
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