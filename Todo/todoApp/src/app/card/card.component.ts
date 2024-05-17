import { Component,Input, inject} from '@angular/core';
import { ButtonComponent } from "../reuse-components/button/button.component";
import { TodoServiceService } from '../todo-service.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [ButtonComponent,CommonModule]
})
export class CardComponent {
    todoService:TodoServiceService=inject(TodoServiceService)
    @Input() todoName:string = '';
    @Input() id:number = 0;

    isEdit:boolean = false;

    toggleEdit(){
        this.isEdit = !this.isEdit;
    }
    save(){
        let newValue = (document.getElementById(String(this.id)) as HTMLInputElement).value
        this.todoService.appTodoEdit(this.id,newValue)
        this. toggleEdit();
    }
    cancel(){

    }

}
