import { Component, OnInit,inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PrimeNGConfig } from 'primeng/api';
import { StudentService } from './services/student.service';
import { StudentDataComponent } from './student-data/student-data.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,HomeComponent,StudentDataComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'medicalStore';
  constructor(private config: PrimeNGConfig) {}
  __student:StudentService = inject(StudentService)
    ngOnInit() {
        this.config.setTranslation({
            accept: 'Accept',
            reject: 'Cancel',
            //translations
        });
    }
}
