import { Injectable, OnInit } from '@angular/core';
import { Result } from '../result';
import { Marks } from '../marks';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ResultService implements OnInit{
  resultList:Result[] = [] as Result[];
  setResultStudent:Result = {} as Result;

  constructor(private router:Router) { }
  ngOnInit(){
    this.insertObject();
  }
  //store result obj
  setResultObj(obj:Result | null){
    this.setResultStudent = obj as Result;
  }
  cancelResultSheetPopup(){
    this.setResultStudent = {} as Result;
  }
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

  insertObject(){
    this.resultObjList.forEach(obj=>{
      this.resultList.push(obj);
    })
  }

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

  resultObjList=[
    {    
      result_id:1,
      student_id:'1',
      term:'first',
      grade:'10',
      total_marks:900,
      average:90,
      teacher_opinion:'fsdfkjs',
      teacher_id:1,
      attend_days:10,
      term_start_date:'2024-06-17',
      term_end_date:'2024-06-17',
      marksList:[],
    },
    {    
      result_id:1,
      student_id:'2',
      term:'fourth',
      grade:'10',
      total_marks:900,
      average:90,
      teacher_opinion:'fsdfkjs',
      teacher_id:1,
      attend_days:10,
      term_start_date:'2024-06-17',
      term_end_date:'2024-06-17',
      marksList:[]
    },
    {    
      result_id:3,
      student_id:'3',
      term:'first',
      grade:'10',
      total_marks:900,
      average:90,
      teacher_opinion:'fsdfkjs',
      teacher_id:1,
      attend_days:10,
      term_start_date:'2024-06-17',
      term_end_date:'2024-06-17',
      marksList:[]
    },{    
      result_id:4,
      student_id:'4',
      term:'second',
      grade:'10',
      total_marks:900,
      average:90,
      teacher_opinion:'fsdfkjs',
      teacher_id:1,
      attend_days:10,
      term_start_date:'2024-06-17',
      term_end_date:'2024-06-17',
      marksList:[]
    },
    {    
      result_id:5,
      student_id:'5',
      term:'third',
      grade:'10',
      total_marks:900,
      average:90,
      teacher_opinion:'fsdfkjs',
      teacher_id:1,
      attend_days:10,
      term_start_date:'2024-06-17',
      term_end_date:'2024-06-17',
      marksList:[]
    },
    {    
      result_id:6,
      student_id:'6',
      term:'first',
      grade:'10',
      total_marks:900,
      average:90,
      teacher_opinion:'fsdfkjs',
      teacher_id:1,
      attend_days:10,
      term_start_date:'2024-06-17',
      term_end_date:'2024-06-17',
      marksList:[]
    },{    
      result_id:7,
      student_id:'7',
      term:'fiveth',
      grade:'10',
      total_marks:900,
      average:90,
      teacher_opinion:'fsdfkjs',
      teacher_id:1,
      attend_days:10,
      term_start_date:'2024-06-17',
      term_end_date:'2024-06-17',
      marksList:[]
    },
    {    
      result_id:8,
      student_id:'8',
      term:'first',
      grade:'10',
      total_marks:900,
      average:90,
      teacher_opinion:'fsdfkjs',
      teacher_id:1,
      attend_days:10,
      term_start_date:'2024-06-17',
      term_end_date:'2024-06-17',
      marksList:[]
    },
    {    
      result_id:9,
      student_id:'1',
      term:'second',
      grade:'10',
      total_marks:900,
      average:90,
      teacher_opinion:'fsdfkjs',
      teacher_id:1,
      attend_days:10,
      term_start_date:'2024-06-17',
      term_end_date:'2024-06-17',
      marksList:[]
    },
    {    
      result_id:10,
      student_id:'9',
      term:'first',
      grade:'10',
      total_marks:900,
      average:90,
      teacher_opinion:'fsdfkjs',
      teacher_id:1,
      attend_days:10,
      term_start_date:'2024-06-17',
      term_end_date:'2024-06-17',
      marksList:[]
    }
  ]
 
  
}
