import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { taskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'addTask.html',
  styleUrl: 'task.css',
})
export class taskComp {
  @Output() cancelTask = new EventEmitter();

  private taskServ = inject(taskService);

  newTitle: string = '';
  newSummary: string = '';
  newDueDate: string = '';
  newPriority: string = '';
  newId: string = '';

  error: boolean = false;

  taskClose() {
    this.cancelTask.emit();
  }

  submissionStatus: boolean = false;

  priorityList = this.taskServ.priorityList;

  taskSubmit() {
    if (
      this.newTitle.trim() &&
      this.newSummary.trim() &&
      this.newDueDate.trim() &&
      this.newPriority.trim()
    ) {
      this.taskServ.addTask({
        id: this.newId,
        title: this.newTitle,
        summary: this.newSummary,
        priority: this.newPriority,
        dueDate: this.newDueDate,
      });

      this.cancelTask.emit();
    } else {
      this.error = true;
    }
  }
}
