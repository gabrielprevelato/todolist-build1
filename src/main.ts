import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { headerComp } from './header/header';
import { taskComp } from './task/addTask';
import { hotbarComp } from './hotbar/hotbar';
import { taskListComp } from './task/task';
import { taskService } from './task/task.service';
import { filterComp } from './task/filter/filter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComp, taskComp, hotbarComp, taskListComp, filterComp],
  templateUrl: 'main.html',
})
export class Playground {
  tasks = inject(taskService);

  get getTaskList() {
    if (this.active) {
      return this.tasks.filterTasks;
    } else {
      return this.tasks.tasks;
    }
  }

  allowAdd: boolean = false;

  addClose() {
     this.allowAdd = false;
  }

  addConfirm() {
     this.allowAdd = true;
  }

  show: boolean = false;
  active: boolean = false;

  filterEvent() {
    this.show = true;
    console.log(this.show);
  }
  filterClose() {
    this.show = false;
    this.active = true;
  }
  filterCancel(){
    this.show = false;
  }

  resetTask() {
    this.active = false;
    this.show = false;
  }
}

bootstrapApplication(Playground);
