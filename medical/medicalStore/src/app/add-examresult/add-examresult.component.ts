import { Component,OnChanges,OnInit,SimpleChanges,inject} from '@angular/core';
import { ResultService } from '../services/result.service'; 
import { StudentService } from '../services/student.service';
import { Student } from '../student';
import { CommonModule } from '@angular/common';
import { Teacher } from '../teacher';
import { TeacherService } from '../services/teacher.service';
import { Router, RouterLink } from '@angular/router';
import { AddmarksComponent } from '../addmarks/addmarks.component';
import { Subjects } from '../subjects';
import { MarksService } from '../services/marks.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Result } from '../result';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-examresult',
  standalone: true,
  imports: [CommonModule,RouterLink,AddmarksComponent,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './add-examresult.component.html',
  styleUrl: './add-examresult.component.css'
})
export class AddExamresultComponent implements OnInit{
  studentList:Student[] = [] as Student[];
  teacherList:Teacher[] = [] as Teacher[];
  subjectList:Subjects[] = [] as Subjects[];
  result!:Result;
  totalMarks = 50;
  average!:number;
  constructor(private _markservice:MarksService, private router:Router){}
 
 resultservice:ResultService = inject(ResultService)
 studentservice:StudentService = inject(StudentService);
 teacherservice:TeacherService = inject(TeacherService);
 examResultReactive!:FormGroup;

 ngOnInit(): void {
  // debugger
  this.studentList = this.studentservice.sendStudent();
  this.teacherList = this.teacherservice.getTeacherList();
  // this.examResultReactive = new FormGroup({
  //   id:new FormGroup(0),
  //   srudent_id:new FormGroup(''),
  //   term:new FormGroup(''),
  //   grade:new FormGroup(''),
  //   total_marks:new FormGroup(''),
  //   average:new FormGroup(''),
  //   teacher_opinion:new FormGroup(''),
  //   teacher_id:new FormGroup(''),
  //   attend_days:new FormGroup(''),
  //   term_start_date:new FormGroup(''),
  //   term_end_date:new FormGroup(''),
  //   marks:new FormGroup(0),
  // })

    this._markservice.calculateTotal.subscribe(data=>{
      this.totalMarks = data;
      // this.examResultReactive.get('total_marks')?.setValue(this.totalMarks);
    })

    
 }
 onClose(){
  this.router.navigate(['/examresult']);
 }

}
