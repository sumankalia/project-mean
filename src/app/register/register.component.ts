import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

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
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

  constructor(private fb: FormBuilder) {}

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
      confirmpassword: [null, Validators.required]
    });
  }
}
