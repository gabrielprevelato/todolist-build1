import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { headerComp } from './header/header';
import { taskComp } from './task/task';
import { hotbarComp } from './hotbar/hotbar';
import { taskListComp } from './task/taskList';
import { taskService } from './task/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComp, taskComp, hotbarComp, taskListComp],
  templateUrl: 'main.html',
})
export class Playground {
  tasks = inject(taskService);

  get getTaskList() {
    return this.tasks.tasks;
  }

  allowAdd: boolean = false;

  addClose() {
    console.log("it worked");
    this.allowAdd = false;
  }

  addConfirm() {
    this.allowAdd = true;
  }
}

bootstrapApplication(Playground);
