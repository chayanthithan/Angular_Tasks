import { Component } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { TeachersComponent } from '../teachers/teachers.component';
@Component({
  selector: 'app-rt-panel',
  standalone: true,
  imports: [StudentComponent,TeachersComponent],
  templateUrl: './rt-panel.component.html',
  styleUrl: './rt-panel.component.css'
})
export class RtPanelComponent {
  
}
