import { Component, inject } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-reportpreview',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './reportpreview.component.html',
  styleUrl: './reportpreview.component.css'
})
export class ReportpreviewComponent {
  __main:MainServiceService = inject(MainServiceService);
  constructor(private router:Router){}

  ngOnInit(){
    this.__main.resetMenu();
    document.getElementById('h__report')?.classList.add(...['menu__select'])
  }
  
}
