import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-preview',
  standalone: true,
  imports: [],
  templateUrl: './teacher-preview.component.html',
  styleUrl: './teacher-preview.component.css'
})
export class TeacherPreviewComponent {
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() contactNo = '';
  @Input() grade = '';
  @Input() link = '';
  @Input() img_name = 'student.jpg';
}
