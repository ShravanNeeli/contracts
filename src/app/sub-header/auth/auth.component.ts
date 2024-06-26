import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(private authservice:AuthService){}

  isLoginMode:boolean=true;

  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;

  }
  onFormSubmited(form:NgForm){
    console.log(form.value)

    const email=form.value.email;
    const password=form.value.password;

    if(this.isLoginMode){
this.authservice.login(email,password).subscribe({
  next:(res)=>{console.log(res)},
  error:(err)=>{console.log(err)}
})
    }else{
this.authservice.signup(email,password).subscribe({
  next:(res)=>{console.log(res)},
  error:(err)=>{console.log(err)}
})
 
  
}

    

    form.reset()
  }

}
