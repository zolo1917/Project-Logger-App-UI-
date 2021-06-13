import { Subscription } from 'rxjs';
import { ProjectService } from '../../Service/project.service';
import { ProjectListItem } from '../../Model/projectListItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects : ProjectListItem[] = [];
  PLSub : Subscription;

  constructor(private projServ : ProjectService) { 
    this.projects = projServ.getProjectList(1);
    this.PLSub = this.projServ.projectListSub.subscribe((data : ProjectListItem[])=>{
      this.projects = data;
    });
  }

  ngOnInit(): void {
  }

  projectLIClick(id : number){
    this.projServ.selectProjectById(id);
  }

  OnEdit(id : number){
    this.projServ.editElementByID(id);
  }

}
