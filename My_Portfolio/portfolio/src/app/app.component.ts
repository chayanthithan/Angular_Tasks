import { Component, HostListener, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectPopupComponent } from "./project-popup/project-popup.component";
import { AchievementComponent } from "./achievement/achievement.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { CommonService } from './common.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HomeComponent, AboutComponent, ProjectsComponent, ProjectPopupComponent, AchievementComponent, ContactComponent, FooterComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  __common:CommonService = inject(CommonService)
  title = 'portfolio';
  @Input() isScrolled: boolean = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    // Change '100' to the number of pixels from the top where you want the navbar to become fixed
    this.isScrolled = window.pageYOffset > 20;
    console.log('isScrolled',this.isScrolled);
  }
}
