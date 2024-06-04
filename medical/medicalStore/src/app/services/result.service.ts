import { Injectable } from '@angular/core';
import { Result } from '../result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  result:Result[] = [] as Result[];
  constructor() { }

  addResult(){
    
  }
}
