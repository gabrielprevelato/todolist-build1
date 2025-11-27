import {Component, Output, EventEmitter, inject} from '@angular/core';
import { taskService } from '../task/task.service';


@Component({
  selector: 'app-hotbar',
  standalone: true,
  imports:[],
  templateUrl: 'hotbar.html',
  styleUrl: 'hotbar.css', 
})

export class hotbarComp {

@Output() addTask = new EventEmitter();
@Output() filter = new EventEmitter();

 private allowNewTask:boolean=false;

 service = inject(taskService);

 arrTasks=this.service.tasks;
  
  addFunc(){
    this.addTask.emit();
    this.allowNewTask=true;
  }
  
  filterTasks(){
    this.filter.emit();
  }

  allowAllDismiss:boolean=true;

  dismissAllTasks(){
    this.service.removeAllTasks();
    this.allowAllDismiss=false;
}
}
