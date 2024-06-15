import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainServiceService } from '../main-service.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent {
  __main:MainServiceService = inject(MainServiceService);
  __student:StudentService = inject(StudentService)

}
