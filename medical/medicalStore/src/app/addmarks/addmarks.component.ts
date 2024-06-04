import { Component, OnInit } from '@angular/core';
import { Subjects } from '../subjects';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-addmarks',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './addmarks.component.html',
  styleUrl: './addmarks.component.css'
})
export class AddmarksComponent implements OnInit{
  subjectList:Subjects[] = [] as Subjects[];
  marksractiveForm!:FormGroup;
  constructor() {}

  student:Subjects={
    id:'',
    subject_name:'',
    marks:0
  }

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
}
