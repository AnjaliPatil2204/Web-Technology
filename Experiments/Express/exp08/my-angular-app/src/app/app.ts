import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}