import { Component, inject, } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mainService:MainServiceService = inject(MainServiceService);
}
