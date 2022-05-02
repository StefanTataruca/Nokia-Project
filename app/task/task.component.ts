import { Optional } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() title = "Task Name"
  @Input() bgColor = "#F5F6F8"
  @Input() baraColor = "#DF5BF5"
  @Input() icon = "message"
  @Input() colStatus = "#82ACFF"
  @Input() owner = "Tomescu"
  @Input() status = "Working on it"
  @Input() date = "2Mai"
  @Input() prio = "Medium"
  @Input() colPrio = "#EE7E7E"
  @Input() time = "2h"
  statusuri : CampStatus[] = []
  constructor() {

   }

  ngOnInit(): void {
    this.statusuri = [new CampStatus (this.owner), new CampStatus(this.status, this.colStatus), new CampStatus(this.date, '', 'error_outline'), 
    new CampStatus(this.prio, this.colPrio), new CampStatus(this.time)];
  }

}

class CampStatus{
  icon = ""
  title = ""
  bgColor = ""
  
   constructor(t?:string, b?:string, i?:string) {
    if(typeof t !== 'undefined'){
      this.title = t;
    }
    
    if(typeof i !== 'undefined'){
      this.icon = i;
    }
    
    if(typeof b !== 'undefined'){
      this.bgColor = b;
    }

  }
 
 }

 class CampAddStatus{
   title = ""
   constructor(t?:string) {
    if(typeof t !== 'undefined'){
      this.title = t;
    }

  }
 }
