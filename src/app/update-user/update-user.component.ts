import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import Swal from "sweetalert2";



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public userForm: FormGroup;
  register: any[];
  user: User;

  constructor(private fb: FormBuilder, private userService: UserService ,private router: Router ) 
  {}

  ngOnInit() {
    let userid = localStorage.getItem("onEditid");
    if(!userid) {
      alert("Invalid action.")
      this.router.navigate(['users']);
      return;
    }
    this.userForm = this.fb.group({
      id: [],
      user : ['', Validators.required]
   });
   this.userService.getUserById(+userid)
   .subscribe( data => {
     this.userForm.setValue(data);
   });
   this.userService.fetchRegister()
   .subscribe(
     (data: any[]) => this.register =data,
     (error) => console.log(error)
   );
  }
  
data: any;
  onSubmit() {
    this.userService.updateRegister(this.userForm.value)
      .subscribe(
        (data) => {
          this.data =data;
          // console.log(data);
          this.router.navigate(['users']);
        //  this.ngOnInit();
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Current User is updated',
          showConfirmButton: false,
          timer: 1500
        })
        }
        ,
        (error) => {
          console.log(error);
        });
  }
}
