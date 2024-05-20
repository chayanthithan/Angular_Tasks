import { Component } from '@angular/core';
import { LtPanelComponent } from '../lt-panel/lt-panel.component';
import { RtPanelComponent } from '../rt-panel/rt-panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LtPanelComponent,RtPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
