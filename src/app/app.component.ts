import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project-angular';
  test;
  ngOnInit(){}
sleep(e){
  alert("I am sleeping");
}

status(e){
  alert("we are watching");
}
departName=['education'];
}
