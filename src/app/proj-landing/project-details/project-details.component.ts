import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from '../../Model/Project';
import { ProjectService } from '../../Service/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  projectDetails : Project = new Project();

  projSub : Subscription;

  constructor(private projServe: ProjectService) { }

  ngOnInit(): void {
    this.projSub = this.projServe.selectedProject.subscribe((data : Project)=>{
        this.projectDetails = data;
    });
  }

}
