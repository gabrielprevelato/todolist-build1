import { Component, inject, Output, EventEmitter } from '@angular/core';
import { taskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'filter.html',
  styleUrl: '../task.css',
})
export class filterComp {
  @Output() cancel = new EventEmitter();
  @Output() close = new EventEmitter();
  @Output() reset = new EventEmitter();

  services = inject(taskService);

  priorityList = this.services.priorityList;

  filterChar(id: string) {
    this.services.sortPush(this.services.tasks, id);
    console.log(this.services.filterTasks);
    this.close.emit();
  }

  filterCancel() {
    this.cancel.emit();
  }

  resetTask() {
    this.reset.emit();
  }
}
