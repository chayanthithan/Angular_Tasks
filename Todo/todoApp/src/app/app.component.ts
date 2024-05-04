import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from "./reuse-components/button/button.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CardComponent, ButtonComponent]
})
export class AppComponent {
  title = 'todoApp';
}
