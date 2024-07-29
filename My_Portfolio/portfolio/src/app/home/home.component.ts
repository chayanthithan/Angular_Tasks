import { Component, HostListener, inject} from '@angular/core';
import { NavigationEnd, Router, RouterLink,RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommonService } from '../common.service';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,TooltipModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  __common:CommonService = inject(CommonService);
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollThreshold = 100;
    this.isScrolled = window.pageYOffset > scrollThreshold;
    console.log('isScrolled:',this.isScrolled);
  }
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }
  ngOnInit(){
    console.log('home component initialized');
  }
}
