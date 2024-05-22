import { Component, inject } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lt-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lt-panel.component.html',
  styleUrl: './lt-panel.component.css'
})
export class LtPanelComponent {
  mainservice:MainServiceService = inject(MainServiceService);
}
