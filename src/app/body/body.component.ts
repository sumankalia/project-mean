import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})

export class BodyComponent{
    res= true;

constructor(){} 



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
     this.onDetails.emit("test stmt for body ");
}
 



}




