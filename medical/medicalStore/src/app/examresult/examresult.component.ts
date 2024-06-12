import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-examresult',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './examresult.component.html',
  styleUrl: './examresult.component.css'
})
export class ExamresultComponent {
__main:MainServiceService = inject(MainServiceService);
ngOnInit(){
    this.__main.resetMenu();
    document.getElementById('h__examresult')?.classList.add(...['menu__select']);
  }
}
