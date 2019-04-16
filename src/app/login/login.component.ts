import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
// import * as jwt from "jsonwebtoken";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
constructor(private fb: FormBuilder, private userService: UserService) { }
loginForm: FormGroup;
onSubmit(){
  this.userService.login(this.loginForm.value)
  .subscribe(
(response) => {console.log(response)
    //   let payload = {subject: this.loginForm.value.id}
    //   let token =jwt.sign(payload, 'secretKey')
      // response.status(200).send({token})
    // localStorage.setItem('token', response.token)
  },
    (error) => console.log(error)
  );
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
  
  Toast.fire({
    type: 'success',
    title: 'Signed in successfully'
  })
}
  ngOnInit() {
    this.loginForm=this.fb.group({
     'email': [null, [Validators.required, Validators.email]],
     'password': [null, [Validators.required, Validators.minLength(6)]]
    })
  }
}