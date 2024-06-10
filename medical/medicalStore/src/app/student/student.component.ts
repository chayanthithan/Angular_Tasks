import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';
import { Student } from '../student';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterModule,FormsModule,PasswordModule,CommonModule,ReactiveFormsModule,RouterLink,TableModule,ButtonModule,TagModule,RatingModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  studentObj:Student[]=[];
  isAddNewStudent:boolean = false;
  studentReactiveForm!: FormGroup;
  student={
    id:'',
    first_name:'',
    last_name:'',
    dob:'',
    gender:'',
    address:'',
    district:'',
    contact:'',
    grade:''
};
value!:string;
  constructor(private studentService:StudentService, private router:Router){
   
  }

  ngOnInit(): void {
    this.studentReactiveForm = new FormGroup({
      id:new FormGroup('',),
      first_name:new FormGroup('',),
      last_name:new FormGroup('',),
      dob:new FormGroup('',),
      gender:new FormGroup('',),
      address:new FormGroup('',),
      district:new FormGroup('',),
      contact:new FormGroup('',),
      grade: new FormGroup('',),
    })

    this.studentObj = this.studentService.sendStudent();
  }
  
  changeValue(){
    this.isAddNewStudent = !this.isAddNewStudent;
  }

  onSubmit(){
    debugger
      if(this.studentReactiveForm.valid){
        this.student.first_name=this.studentReactiveForm.get('first_name')?.value,
        this.student.last_name=this.studentReactiveForm.get('last_name')?.value,
        this.student.dob=this.studentReactiveForm.get('dob')?.value,
        this.student.gender=this.studentReactiveForm.get('gender')?.value,
        this.student.address=this.studentReactiveForm.get('address')?.value,
        this.student.district=this.studentReactiveForm.get('district')?.value,
        this.student.contact=this.studentReactiveForm.get('contact')?.value,
        this.student.grade=this.studentReactiveForm.get('grade')?.value
        this.studentObj.push(this.student);
      }
  }
  
  previewResult(id:string){
    this.router.navigate(['/report-preview',id]);
  }


  
}
