import { Injectable } from '@angular/core';
import { ProjectListItem } from './../Model/projectListItem';

@Injectable()
export class ProjectService {
    private projects : ProjectListItem[] = [{id : 1, name: "test 1", desc: "this is a test project 1"},{id : 2, name: "test 2", desc: "this is a test project 2"}];

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

    
}