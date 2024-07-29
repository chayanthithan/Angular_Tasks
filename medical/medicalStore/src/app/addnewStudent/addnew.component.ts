import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl, ReactiveFormsModule, FormsModule, Validators} from '@angular/forms';
import { ResultService } from '../services/result.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-addnew',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterModule],
  templateUrl: './addnew.component.html',
  styleUrl: './addnew.component.css'
})
export class AddnewComponent implements OnInit{
  constructor(private router:Router){}
  __result:ResultService = inject(ResultService);
  __student:StudentService = inject(StudentService);
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


  ngOnInit(): void {
    this.studentReactiveForm = new FormGroup({
      id:new FormControl('',Validators.required),
    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    district:new FormControl('',Validators.required),
    contact:new FormControl('',Validators.required),
    grade:new FormControl('',Validators.required)
    })
  }

  saveStudent(){
    debugger
    // if(this.studentReactiveForm.valid){
      id:this.studentReactiveForm.get("")?.value;
      this.student.first_name=this.studentReactiveForm.get("first_name")?.value,
      this.student.last_name=this.studentReactiveForm.get("last_name")?.value,
      this.student.dob=this.studentReactiveForm.get("dob")?.value,
      this.student.gender=this.studentReactiveForm.get("gender")?.value,
      this.student.address=this.studentReactiveForm.get("address")?.value,
      this.student.district=this.studentReactiveForm.get("district")?.value,
      this.student.contact=this.studentReactiveForm.get("contact")?.value,
      this.student.grade=this.studentReactiveForm.get("grade")?.value
      this.__student.student.push(this.studentReactiveForm.value);
    // }
  }

  onClose(){
    this.router.navigate(['/student']);
  }
  onCancel(){
    this.studentReactiveForm.reset();
  }
}
