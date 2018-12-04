import { Component, OnInit, NgZone } from '@angular/core';
declare let cordova:any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images:any[] = [];
  constructor(public ngZone:NgZone) { }

  ngOnInit() {
    // this.images.push({name:"akshay"});
    // this.images[1]={name:"sanjay"};

    cordova.plugins.photoLibrary.getLibrary((result) => {
      // this.images.push({name:"sam"});
      console.log(result.library);
      console.log(result.library[0]);
      for(let i=0;i<100;i++)
      {
          this.images.push(result.library[i]);
      }
      this.ngZone.run(() => {
        this.images=this.images.slice();
      });
      
      console.log(this.images);
    }, (err) => {
      console.log(err);
    });
  }
  ngAfterViewInit(){
    
  }

}
