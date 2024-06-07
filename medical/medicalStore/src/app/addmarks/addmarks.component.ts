import { Component, OnInit, inject } from '@angular/core';
import { Subjects } from '../subjects';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { MarksService } from '../services/marks.service';

@Component({
  selector: 'app-addmarks',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,],
  templateUrl: './addmarks.component.html',
  styleUrl: './addmarks.component.css'
})
export class AddmarksComponent implements OnInit{
  _marksservice:MarksService = inject(MarksService)
  subjectList:Subjects[] = [] as Subjects[];
  marksractiveForm!:FormGroup;
  total!:number;
  constructor() {}

 
  ngOnInit(): void {
    this.marksractiveForm = new FormGroup({
      id:new FormControl(''),
      subject_name:new FormControl(''),
      marks:new FormControl(''),
    })
}
  addMarks(){
    var studentObj:Subjects = {
  
    id:this.marksractiveForm.get('id')?.value,
    subject_name:this.marksractiveForm.get('subject_name')?.value,
    marks:this.marksractiveForm.get('marks')?.value,
    
  }
  this.subjectList.push(studentObj);
    console.log("list :",this.subjectList);
    this.marksractiveForm.reset();
  }

  findTotalMarksAndAvg(){
    debugger
    let totalMarks = 0;
    let average = 0;
    this.subjectList.forEach(item=>{
      totalMarks += Number(item.marks);
    })
    this.total = totalMarks;
    average = totalMarks/this.subjectList.length;
    this._marksservice.setSubjects(this.subjectList);
   
  }

  callTotalMethod(){
    let totalMarks = 0;
    let average = 0;
    this.subjectList.forEach(item=>{
      totalMarks += Number(item.marks);
    })
    this.total = totalMarks;
    average = totalMarks/this.subjectList.length;
    this._marksservice.setSubjects(this.subjectList);
    this._marksservice.sendTotalMarks(this.total);
  }
}
