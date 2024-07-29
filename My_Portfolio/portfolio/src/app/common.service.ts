import { Injectable } from '@angular/core';
import { projectDetails } from './projectDetails';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  isScrolled:boolean = false;
  isOpenGallery:boolean = false;
  startIndex = 0;
  itemsToShow = 3;

  // ------------------ project popup variables
  projectDetails = [
    {imgName:'../../assets/project2.png',projectName:'Finance Management',projectDescription:'Maintain income and expenses and generate report based on the month, date and year',frameworks:['Spring Boot','Angular'],libraries:['Bootstrap','Tailwind CSS','Angular Material','Primeng'],languages:['Java','Typescript','Javascript','HTML','CSS'],database:'MYsql',projectYear:2024,ides:['Visual studio code','postman','intellij idea'],projectDetails:''},
    {imgName:'../../assets/project1.png',projectName:'House Management',projectDescription:'Rent house for university student',frameworks:[],libraries:['Bootstrap'],languages:['PHP','Javascript','HTML','CSS'],database:'MYsql',projectYear:2023,ides:['Visual studio code','postman'],projectDetails:''},
    {imgName:'../../assets/project3.png',projectName:'GPA calculator ( UI/UX )',projectDescription:'To calculate GPA specially for university student and they can get result sheet according to semister and fuculty wise',frameworks:[],libraries:[],languages:[],database:'',projectYear:2024,ides:['Figma'],projectDetails:''},
    {imgName:'../../assets/project5.png',projectName:'Portfolio',projectDescription:'This is my own portfolio website which is this',frameworks:['Spring Boot','Angular'],libraries:['Bootstrap','Tailwind CSS','Angular Material','Primeng'],languages:['Java','Typescript','Javascript','HTML','CSS'],database:'MYsql',projectYear:2024,ides:['Visual studio code','postman','intellij idea'],projectDetails:''},
    {imgName:'../../assets/project4.png',projectName:'Vehicle Rent',projectDescription:'Rent vehicles who has and who want',frameworks:[],libraries:['Bootstrap'],languages:['PHP','Javascript','HTML','CSS'],database:'MYsql',projectYear:2024,ides:['Visual studio code','postman'],projectDetails:''},
    ]

  
}
