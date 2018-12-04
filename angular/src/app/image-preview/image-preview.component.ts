import { Component, OnInit, NgZone } from '@angular/core';
import { Location } from '@angular/common';
import { ImagePreviewService } from '../shared/services/image-preview.service';
import { Router, ActivatedRoute } from '@angular/router';
declare let cordova:any;
declare let plugins: any; //For Crop plugin
declare let window:any;
@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  imagePath:string = "./assets/images/7.jpeg";
  originalImagePath:string;
  constructor(private location:Location, 
    public ngZone:NgZone,
    private previewService:ImagePreviewService,
    private router: Router,
    private activatedRoute:ActivatedRoute) { 
      this.ngZone.run(()=>{});
  }
  initImage(){    
      this.imagePath = this.previewService.getImagePath();
  }
  ngOnInit() {    
    this.initImage();  
    this.originalImagePath = this.imagePath;
  }
  backButtonClicked(){
    this.location.back();
  }
  cropClicked(){
    // console.log("Original",this.originalImagePath);
    plugins.crop.promise( this.originalImagePath,
    { quality: 100, targetWidth: -1, targetHeight: -1 })
    .then((path) => {
      // path looks like 'file:///storage/emulated/0/Android/data/com.foo.bar/cache/1477008080626-cropped.jpg?1477008106566'
      console.log('Cropped Image Path!: ' + path);
      this.previewService.setImagePath(path);
      this.initImage();
    }).catch((error)=>{
      console.log(error)
    });
  }
  resetClicked(){
    console.log("Reset called");
    this.previewService.setImagePath(this.originalImagePath);
    this.initImage();
  }
  uploadClicked(){
    this.getFileContentAsBase64(this.imagePath,(base64Image,contentType)=>{
      let imageBlob = this.b64toBlob(base64Image,contentType,'');
      let photo = {
        'string64' : base64Image.toString(),
        'blobfile' : imageBlob,
        'filename' : ''
      }
      console.log("Image : ",base64Image.toString(),"ImageBlob : ",imageBlob);
    })
    // let photo = {
    // 'string64' : success64.toString(),
    // 'blobfile' : imgBlob,
    // 'filename' : ''
    // }
    this.router.navigateByUrl('',{ replaceUrl: true });
  }







  /**
 * This function will handle the conversion from a file to base64 format
 *
 * @path string
 * @callback function receives as first parameter the content of the image
 */
  getFileContentAsBase64(path,callback){
    window.resolveLocalFileSystemURL(path, gotFile, fail);
            
    function fail(e) {
          alert('Cannot found requested file');
    }

    function gotFile(fileEntry) {
          fileEntry.file(function(file) {
              var reader = new FileReader();
              reader.onloadend = function(e) {
                  var content = this.result;
                  var base64result = (<string>content).split(',')[1];
                  var contentType = (<string>content).split(',')[0].split(":")[1].split(";")[0];
                  // console.log("Content:",content," Base64:",base64result," ContentType:",contentType);
                  callback(base64result,contentType);
              };
              // The most important point, use the readAsDatURL Method from the file plugin
              reader.readAsDataURL(file);
          });
    }
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


}
