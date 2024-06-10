import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subjects } from '../subjects';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarksService{
  public calculateTotal = new Subject<number>();
  marksractiveForm!:FormGroup;
  subList:Subjects[] = [] as Subjects[];
  totalMarks!: number;
  average!:number;
  constructor() {
     
   }
  student:Subjects={
    id:0,
    subject_name:'',
    marks:0
  }
  
 setSubjects(subjectList:Subjects[]){
  
    this.subList = subjectList;
 }
    
  getSubjects(){
    return this.subList;
  }
  sendTotalMarks(total:number){
    this.calculateTotal.next(total);
  }

}
