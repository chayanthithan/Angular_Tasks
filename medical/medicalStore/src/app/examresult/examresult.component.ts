import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { CommonModule } from '@angular/common';
import { ResultService } from '../services/result.service';
import { ActionsComponent } from '../actions/actions.component';
import { StudentService } from '../services/student.service';
import { Student } from '../student';
import { TeacherService } from '../services/teacher.service';
import { Teacher } from '../teacher';
@Component({
  selector: 'app-examresult',
  standalone: true,
  imports: [RouterLink,CommonModule,ActionsComponent],
  templateUrl: './examresult.component.html',
  styleUrl: './examresult.component.css'
})
export class ExamresultComponent {
__main:MainServiceService = inject(MainServiceService);
__result:ResultService = inject(ResultService);
__student:StudentService = inject(StudentService);
__teacher:TeacherService = inject(TeacherService);
getStudentObj:Student = {} as Student;
getTeacherObj:Teacher = {} as Teacher;
ngOnInit(){
  this.__result.insertObject();
    this.__main.resetMenu();
    document.getElementById('h__examresult')?.classList.add(...['menu__select']);

    this.__student.student.forEach(obj=>{
      if(obj.id === this.__result.setResultStudent.student_id){
        this.getStudentObj = obj;
      }
    })
    this.__teacher.teacher.forEach(obj=>{
      if(obj.id === this.__result.setResultStudent.student_id){
        this.getTeacherObj = obj;
      }
    })
  }
}
