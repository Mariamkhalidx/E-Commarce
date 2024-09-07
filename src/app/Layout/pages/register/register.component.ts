import { AuthService } from '../../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isLoading:boolean =false

  errMsg:string=''

  constructor(private _auth:AuthService,private _Router:Router){

  }

  RegisterForm:FormGroup =new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)]),
    rePassword:  new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)]),
    phone : new FormControl(null,[Validators.required,Validators.pattern(/^01[1250][0-9]{8}$/)])

    })
sendRegisterData(){
  this.isLoading = true;

  console.log(this.RegisterForm.value)
  this._auth.register(this.RegisterForm.value).subscribe({
    next:(response)=>{
      if(response.message == 'success'){
        this._Router.navigate(['/login'])
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
