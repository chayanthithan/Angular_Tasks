import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { CommonModule } from '@angular/common';
import { ResultService } from '../services/result.service';
import { ActionsComponent } from '../actions/actions.component';
@Component({
  selector: 'app-examresult',
  standalone: true,
  imports: [RouterLink,CommonModule,ActionsComponent],
  templateUrl: './examresult.component.html',
  styleUrl: './examresult.component.css'
})
export class ExamresultComponent {
__main:MainServiceService = inject(MainServiceService);
__result:ResultService = inject(ResultService);
ngOnInit(){
  this.__result.insertObject();
    this.__main.resetMenu();
    document.getElementById('h__examresult')?.classList.add(...['menu__select']);
  }
}
