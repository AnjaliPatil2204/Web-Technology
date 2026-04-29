import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name : string ="ABC";
  age: number =21;
  course: string ="AIML";

  changeName(){
    this.name="sonu";
    this.age=20;
    this.course="ML";
    console.log("Name changed to:" + this.name + ", Age: " + this.age + ", Course: " + this.course);
  }
}
