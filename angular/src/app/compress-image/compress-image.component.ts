import { Component, OnInit } from '@angular/core';
declare var navigator:any;

@Component({
  selector: 'app-compress-image',
  templateUrl: './compress-image.component.html',
  styleUrls: ['./compress-image.component.css']
})
export class CompressImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    navigator.camera.getPicture(this.cameraSuccess, this.cameraError, {});

  }
  cameraError(cameraSuccess: () => void, cameraError: any, cameraOptions: any): any {
    console.log("Method not implemented.",cameraError);
  }

  cameraSuccess(success){
    console.log("image data::",success);
    
  }

}
