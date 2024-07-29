import { Component,inject, Input } from '@angular/core';
import { CommonService } from '../common.service';
import { projectDetails } from '../projectDetails';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-popup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './project-popup.component.html',
  styleUrl: './project-popup.component.css'
})
export class ProjectPopupComponent {
  __common:CommonService = inject(CommonService);
  @Input()projectObj:any;
}
