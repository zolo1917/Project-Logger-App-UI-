import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";


@Injectable()
export class AuthService {
    isLoggedIn : boolean = false;
    public sub  = new Subject<boolean>();
    
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

}