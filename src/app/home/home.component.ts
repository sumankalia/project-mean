import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
//import 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:{userid:number, username: string, age: number, mobile: number}[]=[];
  res= true;
  rec= true;
  bodyForm: FormGroup;
  userDetails: any[];

constructor(private userService: UserService){} 

ngOnInit(){
this.bodyForm= new FormGroup({
  'suggestions': new FormArray([])
})
// this.users = this.userService.user;
}


myfun() {
  this.res = !this.res;
}
user:any[];
fetchUsers(){
  this.rec= !this.rec;
  this.userService.fetchUsers()
  .subscribe(
      (data: any[]) => {
         // console.log(data);
       this.user=data;
      //  console.log(this.user);
  },
      (error) => console.log(error)
  );
}

// @Input() user;
// @Input() departName;
// @Output() onSleep= new EventEmitter() ;
// @Output() onStatus= new EventEmitter();

// statusEvent(e){
// this.onStatus.emit(e);
// }

// sleepEvent(e){
//     this.onSleep.emit(e); 
// }
// @Output() onDetails= new EventEmitter();
// details(e){
//      this.onDetails.emit(e);
// }

addSuggestion(){
  const control= new FormControl(null, Validators.required);
   (<FormArray>this.bodyForm.get('suggestions')).push(control);
}


}
