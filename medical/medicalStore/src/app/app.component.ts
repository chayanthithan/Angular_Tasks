import { Component, OnInit,inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PrimeNGConfig } from 'primeng/api';
import { StudentService } from './services/student.service';
import { StudentDataComponent } from './student-data/student-data.component';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { ResultSheetComponent } from './result-sheet/result-sheet.component';
import { ResultService } from './services/result.service';
import { TeacherDataComponent } from './teacher-data/teacher-data.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TeacherDataComponent,ResultSheetComponent,ChartsComponent,RouterOutlet,HeaderComponent,FooterComponent,HomeComponent,StudentDataComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'medicalStore';
  constructor(private config: PrimeNGConfig) {
    document.addEventListener('DOMContentLoaded', () => {
      let inactivityTime = function() {
          let time:any;
          const alertTime =  5 * 60 * 1000; // 5 minutes
  
          // Reset the timer
          function resetTimer() {
              clearTimeout(time);
              time = setTimeout(() => {
                  alert('You have been inactive for 5 minutes.');
              }, alertTime);
          }
  
          // Event listeners to detect user activity
          window.onload = resetTimer;
  document.onmousemove = resetTimer;
          document.onkeypress = resetTimer;
          document.ontouchstart = resetTimer; // For mobile devices
          document.onclick = resetTimer; // Click events
          document.onscroll = resetTimer; // Scroll events
      };
  
      inactivityTime(); // Initialize the inactivity timer
  });
  }
  __student:StudentService = inject(StudentService);
  __result:ResultService = inject(ResultService);
    ngOnInit() {
        this.config.setTranslation({
            accept: 'Accept',
            reject: 'Cancel',
            //translations
        });

        if (!window.onbeforeunload) {
          window.onbeforeunload = () => {
              return true;
          };
        }
    }
}
