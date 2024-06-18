import { Component,Input,inject} from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { StudentService } from '../services/student.service';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../student';
import { StudentDataComponent } from '../student-data/student-data.component';
import { ActionsComponent } from '../actions/actions.component';
@Component({
  selector: 'app-student-preview',
  standalone: true,
  imports: [CommonModule,FormsModule,StudentDataComponent,ActionsComponent],
  templateUrl: './student-preview.component.html',
  styleUrl: './student-preview.component.css'
})
export class StudentPreviewComponent {
  
  __main:MainServiceService = inject(MainServiceService);
  __student:StudentService = inject(StudentService)
  // @Input() selectedStudent:Student = {} as Student;
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() contactNo = '';
  @Input() grade = '';
  @Input() link = '';
  @Input() img_name = 'student.jpg';
}
