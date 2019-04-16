import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { User } from "../models/user.model";
import Swal from "sweetalert2";
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  register: any[];
  response: any[];
  id: number;
  p: number = 1;
  collection: any[];
  faTrashAlt= faTrashAlt;
  faEdit= faEdit;

  public userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      user: [null, Validators.required]
    });
    this.userService
      .fetchRegister()
      .subscribe(
        (data: any[]) => (this.register = data),
        error => console.log(error)
      );
  }

  createUser() {
    if (this.userForm.valid) {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'User successfully added',
      showConfirmButton: false,
      timer: 1500
    })
    }
  }

  fetchdata() {
    this.userService
      .fetchRegister()
      .subscribe(
        (data: any[]) => (this.register = data),
        error => console.log(error)
      );
  }

  userSubmit() {
    if (this.userForm.valid) {
      this.userService.registerUser(this.userForm.value).subscribe(
        response => {
          response;
          this.ngOnInit();
        },
        error => console.log(error)
        
      );
      // this.fetchdata()
    }
  }

  onDelete(user): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.userService.deleteRegister(user.id).subscribe(
          () => {
            // console.log(response);
            this.ngOnInit();
          },
          error => console.log(error)
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    // console.log(id);
    // this.userService.deleteRegister(user.id).subscribe(
    //   response => {
    //     console.log(response);
    //     this.ngOnInit();
    //   },
    //   error => console.log(error)
    // );
  }

  onEdit(user: User) {
    localStorage.removeItem("onEditid");
    localStorage.setItem("onEditid", user.id.toString());
    this.router.navigate(["./update-user"]);
  }
}
