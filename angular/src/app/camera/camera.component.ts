import { Component, OnInit, NgZone, Renderer2 } from '@angular/core';
import { ImagePreviewService } from '../shared/services/image-preview.service';
import { Router } from '@angular/router';
declare let CameraPreview: any;
declare let Camera:any;
declare let cordova:any;
declare let navigator:any;
declare let window:any;
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  images:any=[];  
  public url: string = 'placeholder.jpg';
  
  constructor(public ngZone:NgZone, 
    private renderer: Renderer2,
    private previewService:ImagePreviewService,
    private router: Router) {
      
   }

  ngOnInit() {
    this.initCamera();
    this.fetchFromGallery();
  }
  ngOnDestroy(){
    CameraPreview.stopCamera();
    this.renderer.removeClass(document.body, 'make-transparent');
  }
  makeBackgroundTransparent(){
    this.renderer.addClass(document.body, 'make-transparent');
  }
  initCamera(){
    this.makeBackgroundTransparent();
    let options = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: CameraPreview.CAMERA_DIRECTION.BACK,
      toBack: true,
      tapPhoto: true,
      tapFocus: false,
      previewDrag: false
    };
    
    CameraPreview.startCamera(options);
    console.log("CameraPreview");
  }
  switchCamera(){
    CameraPreview.switchCamera();
  }
  openGallery(){
    navigator.camera.getPicture((path)=>{
      console.log("Camera Plugin success: ",path);

      //To Convert 'path' from content:// uri to file:// uri
      window.FilePath.resolveNativePath(path, (result) => {
        this.ngZone.run(()=>{
          this.imageSelected(result);
        });
      }, (error) => {
          console.log("Error: ",error);
      });

    }, (error)=>{
      console.log("Camera Plugin error: ",error);
    },
    {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        mediaType:Camera.MediaType.PICTURE
    });
  }
  captureImage(){
    CameraPreview.takePicture({width:5000,height:5000,quality:85},(base64PictureData) => {
      /* code here */
      let date = new Date();
      let filename=date.getFullYear()+"_"+date.getMonth()+"_"+date.getDate()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds()+".jpeg";
      console.log("Filename : "+filename);
      let folderpath = "file:///storage/emulated/0";
      let path = folderpath+"/"+filename;

      this.savebase64AsImageFile(folderpath,filename,base64PictureData,"image/jpeg")
      
      console.log("Path for opening in preview : ",path);
      this.ngZone.run(()=>{
        setTimeout(() => {
          this.imageSelected(path)
        }, 1000);
      })
      
      
      
      //console.log("data:image/jpeg;base64,"+base64PictureData);
      
    },(error) => {
      console.log("Capture error : ",error);
    });
  }
  fetchFromGallery(){
    cordova.plugins.photoLibrary.getLibrary((result) => {
      
      console.log(result.library);
      for(let i=0;i<result.library.length;i++)
      {
        if(result.library[i].id !== undefined)
        {
          this.images[i]=result.library[i];
          this.images[i].path=this.trimPath(this.images[i].id);
        }
      }
      
      this.ngZone.run(() => {
        this.images=this.images.slice();
      });
      console.log(this.images);
    }, (err) => {
      console.log(err);
    });
  }
  trimPath(str){
    return "file://"+str.split(";",2)[1];
  }

  imageSelected(path){
    this.previewService.setImagePath(path);
    this.router.navigateByUrl('/preview');
  }


 /**
 * Convert a base64 string in a Blob according to the data and contentType.
 * 
 * @param b64Data {String} Pure base64 string without contentType
 * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
 * @param sliceSize {Int} SliceSize to process the byteCharacters
 * @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
 * @return Blob
 */
b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}

/**
 * Create a Image file according to its database64 content only.
 * 
 * @param folderpath {String} The folder where the file will be created
 * @param filename {String} The name of the file that will be created
 * @param content {Base64 String} Important : The content can't contain the following string (data:image/png[or any other format];base64,). Only the base64 string is expected.
 */
  savebase64AsImageFile(folderpath,filename,content,contentType){
    // Convert the base64 string in a Blob
    var DataBlob = this.b64toBlob(content,contentType,'');
    
    console.log("Starting to write the file :3");
    
    window.resolveLocalFileSystemURL(folderpath, function(dir) {
        console.log("Access to the directory granted succesfully");
		dir.getFile(filename, {create:true}, function(file) {
            console.log("File created succesfully.");
            file.createWriter(function(fileWriter) {
                console.log("Writing content to file");
                fileWriter.write(DataBlob);
            }, function(){
                alert('Unable to save file in path '+ folderpath);
            });
		});
    });
  }

}
