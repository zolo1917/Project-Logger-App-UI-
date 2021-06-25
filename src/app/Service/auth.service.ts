import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";


@Injectable()
export class AuthService {
    isLoggedIn : boolean = false;
    public sub  = new Subject<boolean>();
    
    constructor(private httpClient : HttpClient){}

    OnLogin(username: String , password : String ){
        // get to hit the backend to check username and password
        this.isLoggedIn = true;
        this.sub.next(this.isLoggedIn);
        console.log("Username :", username);
        console.log("Passoword : ", password)
    }

    OnLogout(){
        if(this.isLoggedIn){
            this.isLoggedIn = false;
        }
        this.sub.next(this.isLoggedIn);
    }

    OnSignUp( signupDetials : any ){
        // Add logic for calling the backend functionality for the setup
        console.log(signupDetials);
        /**
         * Lets break down the functionality here
         *  first well we need to create the json object and send it to the backend  
         */
    
        this.httpClient.post('',null).subscribe((response)=>{
            return 0;
        });
        this.OnLogin(signupDetials.username, signupDetials.password);
    }

}