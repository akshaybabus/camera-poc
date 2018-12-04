import { Injectable } from '@angular/core';

@Injectable()
export class ImagePreviewService {
  imagePath:string='./assets/images/7.jpeg';
  constructor() { }
  setImagePath(path){
    this.imagePath=path;
    console.log("setImagePath : ",this.imagePath )
  }
  getImagePath(){
    return this.imagePath;
  }
}
