import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-reportpreview',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './reportpreview.component.html',
  styleUrl: './reportpreview.component.css'
})
export class ReportpreviewComponent {
  constructor(private router:Router){}

  
}
