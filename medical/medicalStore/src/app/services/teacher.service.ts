import { Injectable } from '@angular/core';
import { Teacher } from '../teacher';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
  constructor() { }

  teacher=[
    {id:'1',first_name:'veluppillai',last_name:'rajakannu',dob:'1999-12-14',gender:'male',address:'uthayanager west',district:'kilinochchi',contact:'07632441578',grade:'12'},
    {id:'2',first_name:'sarukhan',last_name:'saamy',dob:'1999-12-16',gender:'female',address:'vadakkuppaddi',district:'jaffna',contact:'0763244156',grade:'14'},
    {id:'3',first_name:'virat',last_name:'vinayak',dob:'1999-12-17',gender:'male',address:'skanthapuram',district:'kilinochchi',contact:'0763244150',grade:'16'},
    {id:'4',first_name:'suresh',last_name:'kunaa',dob:'1999-12-18',gender:'male',address:'akkarajan',district:'vavuniya',contact:'0763244134',grade:'17'},
    {id:'5',first_name:'rajan',last_name:'rojan',dob:'1999-12-19',gender:'female',address:'salampaikulam',district:'jaffna',contact:'0763244150',grade:'12'},
    {id:'6',first_name:'sekaran',last_name:'vijayakanth',dob:'1999-12-20',gender:'male',address:'uthayanager west',district:'vavuniya',contact:'0763244150',grade:'1'},
  ]
  getTeacherList(){
    return this.teacher;
  }
}
