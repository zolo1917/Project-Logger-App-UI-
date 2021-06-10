import { ProjectEvent } from './../Model/ProjectEvent';
import { EventService } from './event.service';
import { Subject } from 'rxjs';
import { Project } from './../Model/Project';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ProjectListItem } from './../Model/projectListItem';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URLSearchParams } from 'url';

@Injectable()
export class ProjectService {
    private projects : ProjectListItem[] = [{id : 1, name: "test 1", desc: "this is a test project 1"},{id : 2, name: "test 2", desc: "this is a test project 2"}];

    public selectedProject = new Subject<Project>() ;
    public projectListSub = new Subject<ProjectListItem[]>();
    public editSelectedProject = new Subject<Project>();

    projectList : Project[] = [
        { 
            id : 1,
            name : "test 1",
            summary : "This is the summary for test 1",
            details : "this is a longer description of what test 1 is and what all it contains",
            events : [{ id: 1, topic : "PT1 Test event 1", status : "open", eventDesc : "this is a test description for the event"}, {id:2, topic : "PT1 Test event 2", status : "Review", eventDesc : "this is a test description for the event under review"}]  
        },
        { 
            id : 2,
            name : "test 2",
            summary : "This is the summary for test 2",
            details : "this is a longer description of what test 2 is and what all it contains",
            events : [{id:3, topic : "PT2 Test event 1", status : "open", eventDesc : "this is a test description for the event"}, {id:4, topic : "PT2 Test event 2", status : "Review", eventDesc : "this is a test description for the event under review"}]  
        }
    ];

    constructor(
        private eventServe: EventService,
        private httpClient : HttpClient
        ) {}

    /**
     * New method to fetch all active Projects
     */
    getProjectList () {
        let userId: number = 3;
        let projectList : any;
        let headers = new HttpHeaders();
        headers.append('Content-type', 'application/json');
        let params = new HttpParams();
        params.append('id', userId.toString());
        this.httpClient.get('http://localhost:8080/project/getProjects',{ headers: headers, params : params })
        // .pipe(
        //     // map((projectData : Project[]) => {
        //     //     return projectData.map(Project =>{
        //     //         return {... Project, events : Project.events ? Project.events : []};
        //     //     });
        //     // }),
        //     tap(data =>
        //         console.log('All: ' + JSON.stringify(data)));
        // )
        .subscribe(data =>{
            projectList = data;
            console.log('All: ' + JSON.stringify(data));
        },
        error => {
            console.log(error);
        });
        console.log(projectList);
        return this.projects;
    }


    /**
     * Method for adding to a project
     */
    addProject(proj : Project) {
        // pushing into the original project list
        proj.id = this.projectList.length;
        let eventLIst :ProjectEvent[] = [];
        proj.events = eventLIst;
        this.projectList.push(proj);
        
        // pushing into the project list
        let len: number = this.projectList.length;
        let projListItem : ProjectListItem = {        
            'id' : len,
            'name' : proj.name,
            'desc' : proj.summary
        };
        this.projects.push(projListItem);
        this.projectListSub.next(this.projects);
    }


    /**
     * Method for fetching detials as per ID
     */
    getProjectById(projectID : number){
        return this.projectList[projectID-1];
    }


    /**
     * Method for selecting the project
     */
    selectProjectById(projectId : number){
        this.selectedProject.next(this.projectList[projectId-1]);
        this.eventServe.updateEventList(this.projectList[projectId-1].events);
    }


    /**
     * Edit Project select
     * @param id Project Id
     */
    editElementByID(id : number){
        console.log("Project Details from service {}: {}",id, this.getProjectById(id));
        this.editSelectedProject.next(this.getProjectById(id));
    }


    /**
     * Update details of an existing project
     * @param proj Updated project Element
     */
    updateProject(id: number, proj : Project){
        console.log("Updated Project : ", proj);
        console.log("Current Project : ", this.projectList[id-1]);
        this.projectList[id-1]= proj;

        let projLineItem : ProjectListItem = {        
            'id' : id,
            'name' : proj.name,
            'desc' : proj.summary
        };

        this.projects[id-1] = projLineItem;
        this.projectListSub.next(this.projects);
        this.selectedProject.next(this.projectList[id-1]);
    } 
}