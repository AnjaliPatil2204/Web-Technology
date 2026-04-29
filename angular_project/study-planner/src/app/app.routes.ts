import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { TaskList } from './task-list/task-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TaskList }
];