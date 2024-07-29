import { Component, inject } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
__common:CommonService = inject(CommonService);
isOpen(){
  this.__common.isOpenGallery = true;
}
isClose(){
  this.__common.isOpenGallery = false;
}
}
