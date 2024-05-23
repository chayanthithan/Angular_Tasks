import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor() { }

  isMinimized:boolean=true;
  toggle(){
    this.isMinimized = !this.isMinimized;
  }

}
