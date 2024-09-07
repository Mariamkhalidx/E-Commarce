import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoading:boolean =false

  errMsg:string=''

  constructor(private _auth:AuthService,private _Router:Router){

  }

  loginForm:FormGroup =new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)]),

    })
sendRegisterData(){
  this.isLoading = true;

  console.log(this.loginForm.value)
  this._auth.login(this.loginForm.value).subscribe({
    next:(response)=>{
      if(response.message == 'success'){
        localStorage.setItem('userToken',response.token)
        this._Router.navigate(['/home'])
        this._auth.userInformation()
        this.isLoading = false
        }
    },
    error:(err)=>{
      this.errMsg = err.error.message;
      this.isLoading = false;
      },

  })
}

}

