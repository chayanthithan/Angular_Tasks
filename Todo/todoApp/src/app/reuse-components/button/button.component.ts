import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input() btnName:string='';
@Input() bg_color!:string;
@Input() txt_color!:string;

}
