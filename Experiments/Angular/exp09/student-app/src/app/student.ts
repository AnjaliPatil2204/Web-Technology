import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    { name: 'Anjali', age: 20, course: 'AIML' },
    { name: 'Poonam', age: 20, course: 'ETC' },
    { name: 'xyz', age: 21, course: 'AI' }
  ];

  getStudents() {
    return this.students;
  }
}