import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor() { }
  selectedStudent:Student = {} as Student;
  studentObj={
    id:'',
    first_name:'',
    last_name:'',
    dob:'',
    gender:'',
    address:'',
    district:'',
    contact:'',
    grade:'',
    link:''
};
  student=[
    {id:'1',first_name:'chayan',last_name:'kumar',dob:'1999-12-14',gender:'male',address:'uthayanager west',district:'kilinochchi',contact:'07632441578',grade:'12',link:'student2__img.png'},
    {id:'2',first_name:'kuppan',last_name:'saamy',dob:'1999-12-16',gender:'female',address:'vadakkuppaddi',district:'jaffna',contact:'0763244156',grade:'14',link:'student2__img.png'},
    {id:'4',first_name:'kanthan',last_name:'kunaa',dob:'1999-12-18',gender:'male',address:'akkarajan',district:'vavuniya',contact:'0763244134',grade:'17',link:'student2__img.png'},
    {id:'5',first_name:'rajan',last_name:'rojan',dob:'1999-12-19',gender:'female',address:'salampaikulam',district:'jaffna',contact:'0763244150',grade:'12',link:'student2__img.png'},
    {id:'6',first_name:'paratta',last_name:'valu',dob:'1999-12-20',gender:'male',address:'uthayanager west',district:'vavuniya',contact:'0763244150',grade:'1',link:'student2__img.png'},
    {id:'7',first_name:'paratta',last_name:'valu',dob:'1999-12-20',gender:'male',address:'uthayanager west',district:'vavuniya',contact:'0763244150',grade:'1',link:'student2__img.png'},
    {id:'8',first_name:'paratta',last_name:'valu',dob:'1999-12-20',gender:'male',address:'uthayanager west',district:'vavuniya',contact:'0763244150',grade:'1',link:'student2__img.png'},
  ]
  getStudent(data:Student){
    this.studentObj = data;
    this.student.push(this.studentObj);
  }
  sendStudent(){
    return this.student;
  }

  // select student
  setSelectedStudent(obj:any | null){
    this.selectedStudent = obj as Student;
    
  }
}
