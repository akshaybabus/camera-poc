import { Component, OnInit } from '@angular/core';
import { ImagePreviewService } from '../shared/services/image-preview.service';
declare let navigator: any,cordova:any;
declare let CameraPreview: any; // For Camera Preview Plugin
declare let plugins: any; //For Crop plugin
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  path='file:///storage/emulated/0/WhatsApp/Media/WhatsApp Images/IMG-20181122-WA0006.jpg';
  uploadImagePath:string;
  filename:string;
  images:string[]=[];
  constructor(private previewService:ImagePreviewService) { }

  ngOnInit() {
    // this.uploadImagePath=this.previewService.getImagePath();
    // console.log("Cache Path : ",cordova.file);
    // let date = new Date();
    // this.filename=date.getFullYear()+"_"+date.getMonth()+"_"+date.getDate()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds()+".jpeg";
      // console.log("Filename in home: "+this.filename);

    for(let i=0;i<3000;i++)
    {
      this.images[i]='./assets/images/3.png';
    }
  }
  // cropClicked(path){
  //   plugins.crop.promise( "file://"+path,
  //   { quality: 100, targetWidth: -1, targetHeight: -1 })
  //   .then((path) => {
  //     // path looks like 'file:///storage/emulated/0/Android/data/com.foo.bar/cache/1477008080626-cropped.jpg?1477008106566'
  //     console.log('Cropped Image Path!: ' + path);
  //     this.previewService.setImagePath(path);
  //   }).catch((error)=>{
  //     console.log(error)
  //   });
  // }

}
