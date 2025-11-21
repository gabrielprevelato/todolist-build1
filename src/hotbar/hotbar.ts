import {Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-hotbar',
  standalone: true,
  imports:[],
  templateUrl: 'hotbar.html',
  styleUrl: 'hotbar.css', 
})

export class hotbarComp {

@Output() addTask = new EventEmitter();
 private test:boolean=false;
  
  addFunc(){
    this.addTask.emit();
    this.test=true;
  }
  
}
