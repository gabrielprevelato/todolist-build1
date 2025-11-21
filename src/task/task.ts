import {Component, inject, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {taskService} from './task.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports:[FormsModule],
  templateUrl: 'task.html',
  styleUrl: 'task.css',
})

export class taskComp {

  @Output() cancelTask = new EventEmitter();
  
  private taskServ=inject(taskService);

  newTitle:string= '';
  newSummary:string= '';
  newDueDate:string='';
  newId:string='';

  taskClose(){
    this.cancelTask.emit();
  }
  
  taskSubmit(){
    this.taskServ.addTask({
      id:this.newId,
      title:this.newTitle,
      summary:this.newSummary,
      dueDate:this.newDueDate,
    },);
    this.cancelTask.emit();
  }
}