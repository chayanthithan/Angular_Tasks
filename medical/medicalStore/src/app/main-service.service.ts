import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor() { }

  isMinimized:boolean=false;
  toggle(){
    this.isMinimized = !this.isMinimized;
  }

}
