import { ProjectEvent } from './ProjectEvent';

export class Project {
    id : number;
    name : String;
    summary : String;
    details : String;
    events : ProjectEvent[];
} 