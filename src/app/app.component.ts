import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-angular';
  test;
  user=[
    {
        "userid": 101,            
        "username": "rahul kumar",
        "age": 25,
        "mobile":9876655},
    {
        "userid":102,
        "username": "vishal kumar",
        "age": 25,
        "mobile": 355665
    },
    {
        "userid": 103,
        "username": "suman kumar",
        "age": 25,
        "mobile": 56588996
    },
    {
        "userid": 104,
        "username": "ashim",
        "age": 25,
        "mobile": 4564564
    }
];

sleep(e){
  alert("I am sleeping");
}

status(e){
  alert("we are watching");
}
departName=['education'];
}
