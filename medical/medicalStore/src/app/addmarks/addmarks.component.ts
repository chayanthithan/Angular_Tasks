import { Component, OnInit, inject } from '@angular/core';
import { Subjects } from '../subjects';
import { FormControl, FormGroup,FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { MarksService } from '../services/marks.service';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-addmarks',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './addmarks.component.html',
  styleUrl: './addmarks.component.css'
})
export class AddmarksComponent implements OnInit{
  _marksservice:MarksService = inject(MarksService);
  __result:ResultService = inject(ResultService);
  subjectList:Subjects[] = [] as Subjects[];
  marksractiveForm!:FormGroup;
  total!:number;
  isEdit:number | null = null;  //this is for edit
  constructor() {}

 
  ngOnInit(): void {
    this.marksractiveForm = new FormGroup({
      id:new FormControl(''),
      subject_name:new FormControl(''),
      marks:new FormControl(''),
    })
}
  addMarks(){
    const getMarks = this.marksractiveForm.value;
    if(this.isEdit === null){
      var studentObj:Subjects = {
  
        id:this.marksractiveForm.get('id')?.value,
        subject_name:this.marksractiveForm.get('subject_name')?.value,
        marks:this.marksractiveForm.get('marks')?.value,
        
      }
      this.subjectList.push(studentObj);
        console.log("list :",this.subjectList);
        this.marksractiveForm.reset();
    }else{
      
      this.subjectList[this.isEdit] = getMarks; 
    }
    
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

  editMarks(i:number){
    let getMarks =this.subjectList[i];
    this.marksractiveForm.patchValue(getMarks);
    this.isEdit = i;

  }
  deleteMarks(i:number){
    debugger
    this.subjectList = this.subjectList.filter(
      Obj => Obj.id !== i
    );
  }
}
