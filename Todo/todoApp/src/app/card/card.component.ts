import { Component,Input} from '@angular/core';
import { ButtonComponent } from "../reuse-components/button/button.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [ButtonComponent]
})
export class CardComponent {
@Input() todoName:string='';
}
