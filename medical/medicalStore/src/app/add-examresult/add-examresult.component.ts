import { Component,OnInit,inject} from '@angular/core';
import { ResultService } from '../services/result.service'; 
import { StudentService } from '../services/student.service';
import { Student } from '../student';
import { CommonModule } from '@angular/common';
import { Teacher } from '../teacher';
import { TeacherService } from '../services/teacher.service';
import { RouterLink } from '@angular/router';
import { AddmarksComponent } from '../addmarks/addmarks.component';

@Component({
  selector: 'app-add-examresult',
  standalone: true,
  imports: [CommonModule,RouterLink,AddmarksComponent],
  templateUrl: './add-examresult.component.html',
  styleUrl: './add-examresult.component.css'
})
export class AddExamresultComponent implements OnInit{
  student:Student[] = [] as Student[];
  teacher:Teacher[] = [] as Teacher[];

  constructor(){}
 resultservice:ResultService = inject(ResultService)
 studentservice:StudentService = inject(StudentService);
 teacherservice:TeacherService = inject(TeacherService);


 ngOnInit(): void {
     this.student = this.studentservice.sendStudent();
     this.teacher = this.teacherservice.getTeacherList();
 }


}
