import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {

  isAddNewStudent:boolean = false;
  teachers=[
    {id:'1',first_name:'chayan',last_name:'kumar',dob:'1999-12-14',gender:'male',address:'uthayanager west',district:'kilinochchi',contact:'07632441578',grade:'12'},
    {id:'2',first_name:'kuppan',last_name:'saamy',dob:'1999-12-16',gender:'female',address:'vadakkuppaddi',district:'jaffna',contact:'0763244156',grade:'14'},
    {id:'3',first_name:'suppan',last_name:'velu',dob:'1999-12-17',gender:'male',address:'skanthapuram',district:'kilinochchi',contact:'0763244150',grade:'16'},
    {id:'4',first_name:'kanthan',last_name:'kunaa',dob:'1999-12-18',gender:'male',address:'akkarajan',district:'vavuniya',contact:'0763244134',grade:'17'},
    {id:'5',first_name:'rajan',last_name:'rojan',dob:'1999-12-19',gender:'female',address:'salampaikulam',district:'jaffna',contact:'0763244150',grade:'12'},
    {id:'6',first_name:'paratta',last_name:'valu',dob:'1999-12-20',gender:'male',address:'uthayanager west',district:'vavuniya',contact:'0763244150',grade:'1'},
  ]

}
