import { Component, OnInit } from "@angular/core";
// import * as jwt from "jsonwebtoken";
//import 'rxjs/Rx';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { UserService } from '../user.service';
import { error } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  form: any;
  registerForm: FormGroup;
  genders = ["Male", "Female"];
  default="Please Select";
  cities: string[] = [
    "Chandigarh",
    "Mohali",
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Gurgaon",
    "Noida",
    "Shimla"
  ];

  

  registerSubmit() {
    if (this.registerForm.valid && this.registerForm.value.password === 
      this.registerForm.value.confirmpassword ) {
     this.userService.insertUsers(this.registerForm.value)
     .subscribe(
       (response)=> {console.log(response)
      //   let payload = {subject: this.registerForm.value.id}
      //   let token =jwt.sign(payload, 'secretKey')
      //   response.status(200).send({token})
      // localStorage.setItem('token', response.token)
    },
       (error)=> console.log(error)
     );
     const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    
    Toast.fire({
      type: 'success',
      title: 'Successfully registered'
    })
    }
  }

  constructor(private fb: FormBuilder, private userService: UserService) {}

  // ngOnInit(){
  //   this.registerForm=new FormGroup({
  //     'firstName': new FormControl(null, Validators.required),
  //     'lastname': new FormControl(null, Validators.required),
  //     'email': new FormControl(null, [Validators.required, Validators.email]),
  //     'gender': new FormControl('Male', Validators.required),
  //     'city': new FormControl(null, Validators.required),
  //     'password': new FormControl(null, Validators.required),
  //     'confirmpassword': new FormControl(null, Validators.required)
  //   });
  // }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      gender: ['Male', Validators.required],
      city: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmpassword: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
  
}
