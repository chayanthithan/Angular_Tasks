import { Injectable } from '@angular/core';
import { Result } from '../result';
import { Marks } from '../marks';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  resultList:Result[] = [] as Result[];
  constructor(private router:Router) { }
  
  resultObj:Result={
    result_id:0,
    student_id:'',
    term:'',
    grade:'',
    total_marks:0,
    average:0,
    teacher_opinion:'',
    teacher_id:0,          //this is fetch from teacher
    attend_days:0,
    term_start_date:'',
    term_end_date:'',
    marksList:[]
  }
  editFlag:boolean = false;
  index:number = 1;
  isAddNew:boolean = false;

  resultId=0;

  addResult(){
    if(this.editFlag == false){
      this.resultId++;
      this.resultObj.result_id =this.resultId;
      this.resultList.push(this.resultObj);
    }else{
      this.resultList[this.index] = this.resultObj;
      this.editFlag = false;
    }

    this.resultObj={
      result_id:0,
      student_id:'',
      term:'',
      grade:'',
      total_marks:0,
      average:0,
      teacher_opinion:'',
      teacher_id:0,          //this is fetch from teacher
      attend_days:0,
      term_start_date:'',
      term_end_date:'',
      marksList:[]
    }

    // this.resultObj.total_marks +=  this.

  }

  //this is for marks

  marksObj:Marks={
    marks_id:'',
    result_id:'',
    subject_name:'',
    marks:0,
  }

  addMarks(){
    debugger
    if(this.editFlag === false){
      this.resultObj.marksList.push(this.marksObj);
    }else{
      this.resultObj.marksList[this.index] = this.marksObj;
      this.editFlag = false;
    }

    this.resultObj.total_marks += this.marksObj.marks;
    this.resultObj.average = this.resultObj.total_marks /Number(this.resultObj.marksList.length);
    this.marksObj={
      marks_id:'',
      result_id:'',
      subject_name:'',
      marks:0,
    }
  }

  deleteMarks(i:number){
    this.resultObj.total_marks -= this.marksObj.marks;
    this.resultObj.marksList.splice(i,1);
    this.resultObj.average = this.resultObj.total_marks /Number(this.resultObj.marksList.length);
   
  }
  editMarks(i:number){
    this.marksObj = this.resultObj.marksList[i];
    this.editFlag = true;
    this.index = i;
    this.resultObj.total_marks -= this.resultObj.marksList[i].marks;
    this.resultObj.average = this.resultObj.total_marks /Number(this.resultObj.marksList.length)-1;
   
  }
  openPreview(id:number){
    this.router.navigate(['/preview',id]);
  }
  
}
