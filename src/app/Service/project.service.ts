import { EventService } from './event.service';
import { Subject } from 'rxjs';
import { Project } from './../Model/Project';
import { Injectable } from '@angular/core';
import { ProjectListItem } from './../Model/projectListItem';

@Injectable()
export class ProjectService {
    private projects : ProjectListItem[] = [{id : 1, name: "test 1", desc: "this is a test project 1"},{id : 2, name: "test 2", desc: "this is a test project 2"}];

    public selectedProject = new Subject<Project>() ;

    projectList : Project[] = [
        { 
            id : 1,
            name : "test 1",
            summary : "This is the summary for test 1",
            details : "this is a longer description of what test 1 is and what all it contains",
            events : [{topic : "PT1 Test event 1", status : "open", eventDesc : "this is a test description for the event"}, {topic : "PT1 Test event 2", status : "Review", eventDesc : "this is a test description for the event under review"}]  
        },
        { 
            id : 2,
            name : "test 2",
            summary : "This is the summary for test 2",
            details : "this is a longer description of what test 2 is and what all it contains",
            events : [{topic : "PT2 Test event 1", status : "open", eventDesc : "this is a test description for the event"}, {topic : "PT2 Test event 2", status : "Review", eventDesc : "this is a test description for the event under review"}]  
        }
    ];

    constructor(private eventServe: EventService) {}

    /**
     * New method to fetch all active Projects
     */
    getProjectList () {
        return this.projects;
    }
    /**
     * Method for adding to a project
     */
    addProject() {
        
    }
    /**
     * Method for fetching detials as per ID
     */
    getProjectById(projectID : number){
        return this.projectList[projectID];
    }
    /**
     * Method for selecting the project
     */
    selectProjectById(projectId : number){
        this.selectedProject.next(this.projectList[projectId-1]);
        
        this.eventServe.updateEventList(this.projectList[projectId-1].events);
    }
    
}