import { Component, HostListener, OnInit ,inject} from '@angular/core';
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
import { MainServiceService } from '../main-service.service';
import { StudentPreviewComponent } from '../student-preview/student-preview.component';
import { ActionsComponent } from '../actions/actions.component';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ActionsComponent,StudentPreviewComponent,RouterModule,FormsModule,PasswordModule,CommonModule,ReactiveFormsModule,RouterLink,TableModule,ButtonModule,TagModule,RatingModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent{
  __main:MainServiceService = inject(MainServiceService);
  __student:StudentService = inject(StudentService)
  studentObj:Student[]=[];
  isAddNewStudent:boolean = false;
  searchElement:string = '';
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
    grade:'',
    link:''
};

  constructor(private studentService:StudentService, private router:Router){
   console.log("constructor");
  }
  ngDocheck(){
    console.log('ngDocheck');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  afterRender(){
    console.log('afterRender');
  }
  ngOnInit(): void {
    this.__main.resetMenu();
    document.getElementById('h__student')?.classList.add(...['menu__select']);
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
    console.log('ngOnInit')


    this.studentObj = this.studentService.sendStudent();
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }
  
  onDestroy(){
    console.log('onDestroy');
  }
  
  changeValue(){
    this.isAddNewStudent = !this.isAddNewStudent;
  }

  onSubmit(){
      if(this.studentReactiveForm.valid){
        this.student.first_name = this.studentReactiveForm.get('first_name')?.value,
        this.student.last_name = this.studentReactiveForm.get('last_name')?.value,
        this.student.dob = this.studentReactiveForm.get('dob')?.value,
        this.student.gender = this.studentReactiveForm.get('gender')?.value,
        this.student.address = this.studentReactiveForm.get('address')?.value,
        this.student.district = this.studentReactiveForm.get('district')?.value,
        this.student.contact = this.studentReactiveForm.get('contact')?.value,
        this.student.grade = this.studentReactiveForm.get('grade')?.value
        this.studentObj.push(this.student);
      }
  }
  
  previewResult(id:string){
    this.router.navigate(['/report-preview',id]);
  }
  editStudent(id:string){

  }
// dropdown
isDropdownVisible = false;
// itemId = 'someItemId';  // Replace with the actual ID you want to use

toggleDropdown() {
  this.isDropdownVisible = !this.isDropdownVisible;
}

print()
{
  window.print()
}

// search functionality
searchStudent(){
  if(this.searchElement === ''){
    alert('please enter correct name to search');
  }else{
    // console.log("search element",this.searchElement);
    // console.log('this.__student.student',this.__student.student);
    
    this.__student.student = this.__student.student.filter(obj=>
      obj.first_name.includes(this.searchElement) || 
      obj.last_name.includes(this.searchElement)
    );
    // console.log('this.__student.student',this.__student.student);
  }
}

}
