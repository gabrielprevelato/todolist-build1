import { Component, inject, Output, EventEmitter } from '@angular/core';
import { taskService } from './task/task.service';
import { FormsModule } from '@angular/forms';
import { taskComp } from './task/addTask';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, taskComp],
  templateUrl: 'filter.html',
  styleUrl: 'task/task.css',
})
export class filterComp {
  @Output() close = new EventEmitter();
  @Output() reset = new EventEmitter();

  services = inject(taskService);

  priorityList = this.services.priorityList;

  filterChar(id: string) {
    this.services.sortPush(this.services.tasks, id);
    console.log(this.services.filterTasks);
    this.close.emit();
  }

  filterClose() {
    this.close.emit();
  }

  resetTask() {
    this.reset.emit();
  }
}
