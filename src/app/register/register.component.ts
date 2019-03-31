import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
form:any;
registerForm: FormGroup;
  registerSubmit(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
    }
    }
    ngOnInit(){
      this.registerForm=new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastname': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required),
        'confirmpassword': new FormControl(null, Validators.required) 
      });
    }
}
