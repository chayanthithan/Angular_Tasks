import { Component } from '@angular/core';
import { StudentComponent } from '../student/student.component';
@Component({
  selector: 'app-rt-panel',
  standalone: true,
  imports: [StudentComponent],
  templateUrl: './rt-panel.component.html',
  styleUrl: './rt-panel.component.css'
})
export class RtPanelComponent {
  
}
