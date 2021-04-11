import { ProjectService } from './../Service/project.service';
import { ProjectListItem } from './../Model/projectListItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects : ProjectListItem[] = [];

  constructor(private projServ : ProjectService) { 
    this.projects = projServ.getProjectList();
  }

  ngOnInit(): void {
  }

}
