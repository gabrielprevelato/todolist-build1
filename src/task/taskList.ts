import {Component, inject, Input} from '@angular/core';
import {taskService} from './task.service';
import {taskModel} from './task.model';


@Component({
  selector: 'app-taskList',
  standalone: true,
  imports:[],
  templateUrl: 'taskList.html',
  styleUrl: 'task.css', 
})

export class taskListComp {
  tasks = inject(taskService);
  @Input({required:true}) taskList!:taskModel;

  dismissTask(){
    this.tasks.removeTask(this.taskList.id);

  }
  
}
