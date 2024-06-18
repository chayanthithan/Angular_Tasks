import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainServiceService } from '../main-service.service';
import { StudentService } from '../services/student.service';
import { Student } from '../student';
@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css'
})
export class StudentDataComponent {
  __main:MainServiceService = inject(MainServiceService);
  __student:StudentService = inject(StudentService);
  
ngOnInit(){
  this. getUrl();
}
  onClose(){
    this.__student.selectedStudent = {} as Student;
  }
  getUrl(){
    let url = this.__main.currentUrl;
    console.log("url",url);
  }
}
