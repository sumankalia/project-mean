import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
constructor(private fb: FormBuilder) { }
loginForm: FormGroup;
onSubmit(form){
  console.log(form.value);
}
  ngOnInit() {
    this.loginForm=this.fb.group({
     'email': [null, [Validators.required, Validators.email]],
     'password': [null, [Validators.required, Validators.minLength(6)]]
    })
  }
}