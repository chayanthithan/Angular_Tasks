import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-addnew-teacher',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './addnew-teacher.component.html',
  styleUrl: './addnew-teacher.component.css'
})
export class AddnewTeacherComponent {
  constructor(private router:Router){}
  onClose(){
    this.router.navigate(['/teacher']);
  }
}
