import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {

  constructor() { }

  isMinimized:boolean=true;
  isAction:boolean = false;
  toggle(){
    this.isMinimized = !this.isMinimized;
  }
  resetMenu(){
    document.getElementById('h__student')?.classList.remove(...['menu__select']);
    document.getElementById('h__teacher')?.classList.remove(...['menu__select']);
    document.getElementById('h__examresult')?.classList.remove(...['menu__select']);
    document.getElementById('h__attendance')?.classList.remove(...['menu__select']);
    document.getElementById('h__report')?.classList.remove(...['menu__select']);
    document.getElementById('h__home')?.classList.remove(...['menu__select']);
  }
  //this is the method for do action
  triggerAction(){
    this.isAction = !this.isAction;
    console.log(this.isAction);
    }
}
