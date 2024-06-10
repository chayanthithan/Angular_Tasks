import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ResultService } from '../services/result.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
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
   
  }

  saveStudent(){
    
  }

  onClose(){
    this.router.navigate(['/']);
  }
}
