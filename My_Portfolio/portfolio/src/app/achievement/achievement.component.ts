import { Component, inject } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css'
})
export class AchievementComponent {
__common:CommonService = inject(CommonService);

isOpen(){
  this.__common.isOpenGallery = true;
}
}
