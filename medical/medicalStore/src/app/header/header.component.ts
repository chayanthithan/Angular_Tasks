import { Component, inject, } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mainService:MainServiceService = inject(MainServiceService);
}
