import { Component ,inject} from '@angular/core';
import { LtPanelComponent } from '../lt-panel/lt-panel.component';
import { RtPanelComponent } from '../rt-panel/rt-panel.component';
import { MainServiceService } from '../main-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LtPanelComponent,RtPanelComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mainservice:MainServiceService = inject(MainServiceService);

}
