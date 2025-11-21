import {Injectable} from '@angular/core';
import {type taskModel} from './task.model';

@Injectable ({
  providedIn:'root'})
  
  export class taskService {
    // keep a typed array and initialize it so add/remove operations are safe
    tasks: taskModel[] = []

getTasks(){
  return this.tasks
}
  
addTask(data:taskModel){
  this.tasks.push({
    id: (this.tasks.length + 1).toString(),
    title: data.title,
    summary: data.summary,
    dueDate: data.dueDate,
  });
}

removeTask(filterId:string){
  this.tasks=this.tasks.filter((obj)=>obj.id!==filterId);
  console.log(this.tasks);
  }
}