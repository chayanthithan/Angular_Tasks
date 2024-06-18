import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  previousUrl: string = '';
  currentUrl: string = '';

  constructor(@Inject(DOCUMENT) private document: HTMLDocument,private router:Router) { 
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.urlAfterRedirects;
      }
    })
  }

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

}
