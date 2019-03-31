import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
constructor() { }
form:any;
test(form){
  console.log(form.value);
}
  ngOnInit() {
  }
}