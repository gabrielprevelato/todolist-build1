import { Injectable } from '@angular/core';
import { priorityModel, type taskModel } from './task.model';


@Injectable({
  providedIn: 'root',
})
export class taskService {
  // keep a typed array and initialize it so add/remove operations are safe
  tasks: taskModel[] = [];
  filterTasks: taskModel[] = [];


  priorityList: priorityModel[] = [
    { name: 'regular', id: 'r', color: 'color:blue;' },
    { name: 'important', id: 'i', color: 'color:orange;' },
    { name: 'urgent', id: 'u', color: 'color:red;' },
  ];

  getTasks() {
    return this.tasks;
  }

  priorityId(priority: string) {
    // create an id prefix based on priority and count existing tasks with that prefix
    const prefix = priority === 'urgent' ? 'u' : priority === 'important' ? 'i' : 'r';
    const count = this.tasks.filter((t) => t.id && t.id.startsWith(prefix)).length;
    return prefix + (count + 1).toString();
  }

  sortPush(sourceArr: taskModel[], character: string) {
    this.filterTasks = sourceArr.filter((obj) => {
      const firstChar = obj.id.charAt(0);
      return firstChar === character;
    });
  }

  addTask(data: taskModel) {
    // build the new task with a per-priority sequential id
    const newTask: taskModel = {
      id: this.priorityId(data.priority),
      title: data.title,
      summary: data.summary,
      priority: data.priority,
      dueDate: data.dueDate,
    };

    // determine insertion index so tasks are grouped by priority
    const rank: Record<string, number> = { urgent: 1, important: 2, regular: 3 };
    const newRank = rank[data.priority] ?? 3;

    const insertAt = this.tasks.findIndex((t) => {
      const tRank = rank[t.priority] ?? 3;
      return tRank > newRank;
    });

    if (insertAt === -1) {
      // no item has a lower priority rank, append to end
      this.tasks.push(newTask);
    } else {
      // insert before the first task that has a lower priority (higher rank number)
      this.tasks.splice(insertAt, 0, newTask);
    }
  }

  removeTask(filterId: string) {
    this.tasks = this.tasks.filter((obj) => obj.id !== filterId);
    this.filterTasks = this.filterTasks.filter((obj) => obj.id !== filterId);
  }

  removeAllTasks() {
    this.filterTasks = [];
    this.tasks = [];
  }
}
