import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
form:any;
  constructor() { }
  registerSubmit(form){
    console.log(form.value);
    }
}
