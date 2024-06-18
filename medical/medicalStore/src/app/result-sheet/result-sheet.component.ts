import { Component, inject } from '@angular/core';
import { ResultService } from '../services/result.service';
import {NgxPrintModule} from 'ngx-print';
import { Student } from '../student';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-result-sheet',
  standalone: true,
  imports: [NgxPrintModule],
  templateUrl: './result-sheet.component.html',
  styleUrl: './result-sheet.component.css'
})
export class ResultSheetComponent {
__result:ResultService = inject(ResultService);
__student:StudentService = inject(StudentService);
getStudentObj:Student = {}as Student;
  ngOnInit(){
   
    this.__student.student.forEach(obj=>{
      if(obj.id === this.__result.setResultStudent.student_id){
        this.getStudentObj = obj;
      }
    })
  }
}
