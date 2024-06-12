import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teacher } from '../teacher';
import { TeacherService } from '../services/teacher.service';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule,RouterLink,TableModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent{
  
  __main:MainServiceService = inject(MainServiceService);

  teacherObj:Teacher[]=[];
  isAddNewTeacher:boolean = false;

  constructor(private teacherservice:TeacherService){
    this.teacherObj = this.teacherservice.getTeacherList();
  }
  ngOnInit(): void {
    this.__main.resetMenu();
    document.getElementById('h__teacher')?.classList.add(...['menu__select'])
  }

  teacher={
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

  changeValue(){
    this.isAddNewTeacher = !this.isAddNewTeacher;
  }
  
    
 
}
