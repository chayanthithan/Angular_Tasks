import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
todo:Todo[]=[] as Todo[];
id:number=0;
  constructor() { }
  addTodo(){
    let input=(document.getElementById('inputData') as HTMLInputElement),
     data=(document.getElementById('inputData') as HTMLInputElement).value;
     (document.getElementById('inputData') as HTMLInputElement).value='';
     this.id=Number(Math.round(Math.random()*100));
  //  this.todo.push({})
    const obj={id:this.id,todoName:data};
    this.todo.push(obj);
    // console.log(this.todo);
    localStorage.setItem('todo', JSON.stringify(this.todo));     //this is for convert string to json
  }



  appTodoDelete(id:number){
    // debugger
    let newTodo=this.todo.filter(obj => obj.id !== id)
    this.todo=newTodo;
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
  appTodoEdit(id:number,value:string){
    this.todo.forEach((obj)=>{
      if(obj.id===id){
        obj.todoName=value;
      }
    })
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
}
