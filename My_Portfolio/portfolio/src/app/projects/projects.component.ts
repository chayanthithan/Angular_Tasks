import { Component, inject } from '@angular/core';
import { ProjectPopupComponent } from '../project-popup/project-popup.component';
import { CommonService } from '../common.service';
import { CommonModule } from '@angular/common';
import { projectDetails } from '../projectDetails';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectPopupComponent,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
__common:CommonService = inject(CommonService);

get displayedProjects() {
  return this.__common.projectDetails.slice(this.__common.startIndex, this.__common.startIndex + this.__common.itemsToShow);
}
enableRightArrow:boolean = false;
enableLeftArrow:boolean = false;
nextProject(){
  if(this.__common.projectDetails.length > this.__common.itemsToShow && this.__common.projectDetails.length > this.__common.startIndex){
    this.__common.startIndex += 1;
    this.__common.itemsToShow += 1;
    if(this.__common.itemsToShow == this.__common.projectDetails.length){
      this.enableRightArrow = true;
      this.enableLeftArrow = false;
    }
    console.log('if nextProject - this.__common.startIndex '+this.__common.startIndex);
    console.log('if nextProject - this.__common.startIndex '+this.__common.itemsToShow);
  }
  else{
    //sugestion if reached end then can make the button desable or change the color of it
    // alert('you reached end please click left-arrow')
    console.log('else nextProject - this.__common.startIndex '+this.__common.startIndex);
    console.log('else nextProject - this.__common.startIndex '+this.__common.itemsToShow);
  }
}
previousProject(){
  if(this.__common.startIndex > 0){
    this.enableRightArrow = false;
    this.__common.startIndex = this.__common.startIndex - 1;
    this.__common.itemsToShow = this.__common.itemsToShow - 1;
    console.log('length:',this.__common.projectDetails.length)
    console.log('if previousProject - this.__common.startIndex '+this.__common.startIndex);
    console.log('if previousProject - this.__common.itemsToShow '+this.__common.itemsToShow);
  }else{
    this.enableLeftArrow = true;
    this.enableRightArrow = false;
    console.log('else previousProject - this.__common.startIndex '+this.__common.startIndex);
    console.log('else previousProject - this.__common.itemsToShow '+this.__common.itemsToShow);
    // alert('you reached end please click right-arrow')
  }
}
}
