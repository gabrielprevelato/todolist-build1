import { Component, inject, Input } from '@angular/core';
import { taskService } from './task.service';
import { taskModel, priorityModel } from './task.model';

@Component({
  selector: 'app-taskList',
  standalone: true,
  imports: [],
  templateUrl: 'task.html',
  styleUrl: 'task.css',
})
export class taskListComp {
  tasks = inject(taskService);

  @Input({ required: true }) taskList!: taskModel;
  @Input() priorityModel!: priorityModel;

  dismissTask() {
    this.tasks.removeTask(this.taskList.id);
  }
}
