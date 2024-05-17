import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from "./reuse-components/button/button.component";
import { TodoServiceService } from './todo-service.service';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CardComponent, ButtonComponent,CommonModule]
})
export class AppComponent {
  title = 'todoApp';

  todoService:TodoServiceService=inject(TodoServiceService) //this is called dependency injection
  // TodoServiceService: any;
  // constructor(private todoser:TodoServiceService){}  //this is alo another type of  dependency injection
  constructor(){
    this.todoService.todo = JSON.parse(localStorage.getItem('todo') || '') as Todo[]   //this is for convert json to string
  }
  
}
