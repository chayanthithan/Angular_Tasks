import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-addnew',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './addnew.component.html',
  styleUrl: './addnew.component.css'
})
export class AddnewComponent implements OnInit{
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
  }


}
