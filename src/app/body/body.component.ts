import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})

export class BodyComponent{
    res= true;
    bodyForm: FormGroup;
constructor(){} 
ngOnInit(){
this.bodyForm= new FormGroup({
    'suggestions': new FormArray([])
})
}


myfun() {
    this.res = !this.res;
}
@Input() user;
@Input() departName;
@Output() onSleep= new EventEmitter() ;
@Output() onStatus= new EventEmitter();

statusEvent(e){
this.onStatus.emit(e);
}

sleepEvent(e){
    this.onSleep.emit(e); 
}
@Output() onDetails= new EventEmitter();
details(e){
     this.onDetails.emit(e);
}
 
addSuggestion(){
    const control= new FormControl(null, Validators.required);
     (<FormArray>this.bodyForm.get('suggestions')).push(control);
}


}




