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
    private projects : ProjectListItem[] = [];

    public selectedProject = new Subject<Project>() ;
    public projectListSub = new Subject<ProjectListItem[]>();
    public editSelectedProject = new Subject<Project>();

    projectList : Project[] = [];

    constructor(
        private eventServe: EventService,
        private httpClient : HttpClient
        ) {
            // TODO : update and get the list of xref values from the backend.
            this.httpClient.get('http://localhost:8080/project/getProjectSStatusValues',{headers : this.setHTTPHeaders()}).subscribe((data : any[])=>{
                console.log(data);
            });
        }

    private  setHTTPHeaders() {
        let headers = new HttpHeaders();
        headers.append('Content-type', 'application/json');
        headers.set('Access-Control-Allow-Origin', '*');
        return headers;
    }
    
        /**
     * New method to fetch all active Projects
     */
    getProjectList (userId : number) {
        userId = 1;
        
        this.httpClient.get('http://localhost:8080/project/getProjects?id='+userId,{ headers: this.setHTTPHeaders()})
        .subscribe((data : any[]) =>{
            for(var i=0 ;i < data.length ; i++ ){
                console.log(data[i]);
               
                // if(data[i].events) {
                //     proj.events = data[i].events
                // }else {
                //     let eventList : ProjectEvent[] = [];
                //     proj.events = eventList ;
                // }
                // this.projectList.push(proj);
                // create project List Item
                
                let projListItem : ProjectListItem = new ProjectListItem;
                projListItem.id = data[i].id;
                projListItem.name = data[i].name;
                projListItem.desc = data[i].summary;
                this.projects.push(projListItem);

            }
        },
        error => {
            console.log(error);
        });
        return this.projects;
    }

    private convertDataProjToModel(data : any){
        let proj : Project = new Project();
        proj.id = data.id;
        proj.name = data.projectName;
        proj.summary = data.summary;
        proj.details = data.projectDescription;
        return proj
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
     * This method is called when a project is selected from the list of projects
     * I need to call the backed and fetch the project details by ID
     * Then i need to call the method in the event service to fetch the events for the respective project
     * 
     */
    selectProjectById(proj : Project){
        console.log(proj);
        
        this.getProjectByID(proj.id)    ;
        
        this.eventServe.updateEventList(proj.id);

    }

    private getProjectByID(projId : number ) {
        this.httpClient.get('http://localhost:8080/project/getProjectById?id='+projId, {headers: this.setHTTPHeaders()}).subscribe((data : any)=>{
            console.log(data);
            this.selectedProject.next(this.convertDataProjToModel(data));
        });

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