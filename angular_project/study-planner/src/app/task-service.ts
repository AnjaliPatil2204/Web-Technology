import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [
    { subject: 'html', deadline: '2026-05-01', priority: 'High' },
    { subject: 'css', deadline: '2026-05-03', priority: 'Medium' },
    { subject: 'javascript', deadline: '2026-05-05', priority: 'Low' }
  ];

  getTasks() {
    return this.tasks;
  }
}