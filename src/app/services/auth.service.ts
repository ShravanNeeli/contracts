import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResonse } from "../interface/auth.response";
import { environment } from "../../environments/environment.development";

@Injectable({providedIn:'root'})

export class AuthService{
constructor(private http:HttpClient){}

signup(email:string ,password:string){
    const data={ email:email,password:password,returnSecureToken:true}
   return this.http.post<AuthResonse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseAPIKEY,data)
}

login(email:string ,password:string){
    const data={ email:email,password:password,returnSecureToken:true}
    return this.http.post<AuthResonse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseAPIKEY,data)
}

}

