webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://blog.angular.io//\">Angular blog</a></h2>\n  </li>\n</ul>\n -->\n <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_virtual_scroller__ = __webpack_require__("../../../../ngx-virtual-scroller/dist/virtual-scroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_virtual_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_virtual_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__camera_camera_component__ = __webpack_require__("../../../../../src/app/camera/camera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cdvphoto_library_pipe__ = __webpack_require__("../../../../../src/app/cdvphoto-library.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__image_preview_image_preview_component__ = __webpack_require__("../../../../../src/app/image-preview/image-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_image_preview_service__ = __webpack_require__("../../../../../src/app/shared/services/image-preview.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'camera', component: __WEBPACK_IMPORTED_MODULE_6__camera_camera_component__["a" /* CameraComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'preview', component: __WEBPACK_IMPORTED_MODULE_9__image_preview_image_preview_component__["a" /* ImagePreviewComponent */] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__camera_camera_component__["a" /* CameraComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__cdvphoto_library_pipe__["a" /* CDVPhotoLibraryPipe */],
            __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__image_preview_image_preview_component__["a" /* ImagePreviewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3_ngx_virtual_scroller__["VirtualScrollerModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__shared_services_image_preview_service__["a" /* ImagePreviewService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/camera/camera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    margin: 0;\n    padding:0;\n    position: relative;\n    height: 100%;\n    min-height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.camera-header{\n    height: 70px;\n    width:100%;\n    -ms-flex: none;\n        flex: none;\n}\n.camera-content{\n    height: 100px;\n    width:100%;\n    -ms-flex: auto;\n        flex: auto;\n}\n.camera-footer{\n    height: 300px;\n    width:100%;\n    -ms-flex: none;\n        flex: none;\n}\n.scrolling-wrapper {\n    overflow-x: scroll;\n    overflow-y: hidden;\n    white-space: nowrap;\n    \n}\n\n.imgGallery{\n    width:100px;\n    height: 100px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\nimg{\n    max-width: 100%;\n    max-height: 100%;\n}\n.card {\ndisplay: inline-block;\nwidth:100px;\nheight: 100px;\nvertical-align: top;\nmargin-left:5px;\n}\n\n.camera-btn{\n    width:70px;\n    height:70px;\n    padding:10px;\n    border-radius: 36px;\n    color:white;\n}\n.divButtons{\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    padding: 0 15px 15px 15px;\n}\n.img-camera-btn{\n    width:50px;\n    height: 50px;\n}\n\nvirtual-scroller {\n    display: block;\n    width: 350px;\n    height: 200px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/camera/camera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"camera-header\" >\n    \n    \n    \n  </div>\n  <div class=\"camera-content\">\n  </div>\n\n  <div class=\"camera-footer\">\n      <div class=\"scroll-div\">\n          <!-- <div class=\"scrolling-wrapper\" *ngIf=\"images\">\n            <div class=\"card\" *ngFor=\"let image of images\"><img class=\"imgGallery\" [src]=\"image.path\" (click)=\"imageSelected(image.path)\"/></div>\n          </div> -->\n\n          <virtual-scroller #scroll [items]=\"images\" class=\"scrolling-wrapper\">\n              <div class=\"card\" *ngFor=\"let image of scroll.viewPortItems\">\n                <!-- <div class=\"imgGallery\" [style.backgroundImage]=\"'url('+ image.path +')'\"></div> -->\n                <img class=\"imgGallery\" [src]=\"image.path\"/>\n              </div>\n            </virtual-scroller>\n      </div>\n    \n    <!-- <div class=\"divButtons\">\n      <button class=\"btn\" (click)=\"openGallery()\">Gallery</button>\n      <button class=\"btn\" (click)=\"captureImage()\">Capture</button>\n      <button class=\"btn\" (click)=\"switchCamera()\">Switch</button>\n    </div> -->\n    <div class=\"divButtons\">\n      <div class=\"camera-btn\" (click)=\"openGallery()\"><img src=\"./assets/images/insert_photo_white_192x192.png\" class=\"img-camera-btn\"/></div>\n      <div class=\"camera-btn\" (click)=\"captureImage()\"><img src=\"./assets/images/camera_white_192x192.png\" class=\"img-camera-btn\"/></div>\n      <div class=\"camera-btn\" (click)=\"switchCamera()\"><img src=\"./assets/images/camera_front_white_192x192.png\" class=\"img-camera-btn\"/></div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/camera/camera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_image_preview_service__ = __webpack_require__("../../../../../src/app/shared/services/image-preview.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraComponent = (function () {
    function CameraComponent(ngZone, renderer, previewService, router) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.previewService = previewService;
        this.router = router;
        this.images = [];
        this.url = 'placeholder.jpg';
    }
    CameraComponent.prototype.ngOnInit = function () {
        this.initCamera();
        this.fetchFromGallery();
    };
    CameraComponent.prototype.ngOnDestroy = function () {
        CameraPreview.stopCamera();
        this.renderer.removeClass(document.body, 'make-transparent');
    };
    CameraComponent.prototype.makeBackgroundTransparent = function () {
        this.renderer.addClass(document.body, 'make-transparent');
    };
    CameraComponent.prototype.initCamera = function () {
        this.makeBackgroundTransparent();
        var options = {
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
    };
    CameraComponent.prototype.switchCamera = function () {
        CameraPreview.switchCamera();
    };
    CameraComponent.prototype.openGallery = function () {
        var _this = this;
        navigator.camera.getPicture(function (path) {
            console.log("Camera Plugin success: ", path);
            //To Convert 'path' from content:// uri to file:// uri
            window.FilePath.resolveNativePath(path, function (result) {
                _this.ngZone.run(function () {
                    _this.imageSelected(result);
                });
            }, function (error) {
                console.log("Error: ", error);
            });
        }, function (error) {
            console.log("Camera Plugin error: ", error);
        }, {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: Camera.MediaType.PICTURE
        });
    };
    CameraComponent.prototype.captureImage = function () {
        var _this = this;
        CameraPreview.takePicture({ width: 5000, height: 5000, quality: 85 }, function (base64PictureData) {
            /* code here */
            var date = new Date();
            var filename = date.getFullYear() + "_" + date.getMonth() + "_" + date.getDate() + "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds() + ".jpeg";
            console.log("Filename : " + filename);
            var folderpath = "file:///storage/emulated/0";
            var path = folderpath + "/" + filename;
            _this.savebase64AsImageFile(folderpath, filename, base64PictureData, "image/jpeg");
            console.log("Path for opening in preview : ", path);
            _this.ngZone.run(function () {
                setTimeout(function () {
                    _this.imageSelected(path);
                }, 1000);
            });
            //console.log("data:image/jpeg;base64,"+base64PictureData);
        }, function (error) {
            console.log("Capture error : ", error);
        });
    };
    CameraComponent.prototype.fetchFromGallery = function () {
        var _this = this;
        cordova.plugins.photoLibrary.getLibrary(function (result) {
            console.log(result.library);
            for (var i = 0; i < result.library.length; i++) {
                if (result.library[i].id !== undefined) {
                    _this.images[i] = result.library[i];
                    _this.images[i].path = _this.trimPath(_this.images[i].id);
                }
            }
            _this.ngZone.run(function () {
                _this.images = _this.images.slice();
            });
            console.log(_this.images);
        }, function (err) {
            console.log(err);
        });
    };
    CameraComponent.prototype.trimPath = function (str) {
        return "file://" + str.split(";", 2)[1];
    };
    CameraComponent.prototype.imageSelected = function (path) {
        this.previewService.setImagePath(path);
        this.router.navigateByUrl('/preview');
    };
    /**
    * Convert a base64 string in a Blob according to the data and contentType.
    *
    * @param b64Data {String} Pure base64 string without contentType
    * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
    * @param sliceSize {Int} SliceSize to process the byteCharacters
    * @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    * @return Blob
    */
    CameraComponent.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
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
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    /**
     * Create a Image file according to its database64 content only.
     *
     * @param folderpath {String} The folder where the file will be created
     * @param filename {String} The name of the file that will be created
     * @param content {Base64 String} Important : The content can't contain the following string (data:image/png[or any other format];base64,). Only the base64 string is expected.
     */
    CameraComponent.prototype.savebase64AsImageFile = function (folderpath, filename, content, contentType) {
        // Convert the base64 string in a Blob
        var DataBlob = this.b64toBlob(content, contentType, '');
        console.log("Starting to write the file :3");
        window.resolveLocalFileSystemURL(folderpath, function (dir) {
            console.log("Access to the directory granted succesfully");
            dir.getFile(filename, { create: true }, function (file) {
                console.log("File created succesfully.");
                file.createWriter(function (fileWriter) {
                    console.log("Writing content to file");
                    fileWriter.write(DataBlob);
                }, function () {
                    alert('Unable to save file in path ' + folderpath);
                });
            });
        });
    };
    return CameraComponent;
}());
CameraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-camera',
        template: __webpack_require__("../../../../../src/app/camera/camera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/camera/camera.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_image_preview_service__["a" /* ImagePreviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_image_preview_service__["a" /* ImagePreviewService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CameraComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=camera.component.js.map

/***/ }),

/***/ "../../../../../src/app/cdvphoto-library.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CDVPhotoLibraryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CDVPhotoLibraryPipe = (function () {
    function CDVPhotoLibraryPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CDVPhotoLibraryPipe.prototype.transform = function (url) {
        return url.startsWith('cdvphotolibrary://') ? this.sanitizer.bypassSecurityTrustUrl(url) : url;
    };
    return CDVPhotoLibraryPipe;
}());
CDVPhotoLibraryPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'cdvphotolibrary'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], CDVPhotoLibraryPipe);

var _a;
//# sourceMappingURL=cdvphoto-library.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    \n    width:100px;\n    height: 100px;\n}\n.imgGallery{\n    width:100px;\n    height: 100px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"make-visible\">\n  <!-- <div class=\"card\" style=\"background-color:blue\"><img class=\"imgGallery\" src=\"/storage/emulated/0/WhatsApp/Media/WhatsApp Images/IMG-20181122-WA0006.jpg\"/></div> -->\n  <!-- <div class=\"card\" *ngFor=\"let image of images\"><img class=\"imgGallery\"  [src]=\"image.id | trimPath\"/></div> -->\n  <!-- <div class=\"card\" *ngFor=\"let image of images\">{{image.id}}</div> -->\n  <!-- {{images}}<br><br>\n  <h2 *ngFor=\"let image of images\">{{image}}</h2> -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = (function () {
    function GalleryComponent(ngZone) {
        this.ngZone = ngZone;
        this.images = [];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        // this.images.push({name:"akshay"});
        // this.images[1]={name:"sanjay"};
        var _this = this;
        cordova.plugins.photoLibrary.getLibrary(function (result) {
            // this.images.push({name:"sam"});
            console.log(result.library);
            console.log(result.library[0]);
            for (var i = 0; i < 100; i++) {
                _this.images.push(result.library[i]);
            }
            _this.ngZone.run(function () {
                _this.images = _this.images.slice();
            });
            console.log(_this.images);
        }, function (err) {
            console.log(err);
        });
    };
    GalleryComponent.prototype.ngAfterViewInit = function () {
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object])
], GalleryComponent);

var _a;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:focus{\n    color:white;\n    text-decoration: none;\n}\na{\n    color:white;\n    text-decoration: none;\n}\n.mainButtons > button{\n    width: 200px;\n    border-radius: 20px;\n    background-color: #1d2124;\n    height: 45px;\n    color:white;\n}\n.box-img{\n    height:100px;\n    width: 100px;\n    -o-object-fit: cover;\n       object-fit: cover\n}\n.selected-image{\n    width:200px;\n    \n}\n\n.camera-btn{\n    width:70px;\n    height:70px;\n    padding:10px;\n    background-color: black;\n    border-radius: 36px;\n    color:white;\n    /* float:left; */\n}\n.divButtons{\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    padding: 0 15px 15px 15px;\n}\n.img-camera-btn{\n    width:50px;\n    height: 50px;\n}\nvirtual-scroller {\n    display: block;\n    width: 350px;\n    height: 200px;\n  }\n  .scrolling-wrapper {\n    overflow-x: scroll;\n    overflow-y: hidden;\n    white-space: nowrap;\n    \n}\n  .card {\n    display: inline-block;\n    width:100px;\n    height: 100px;\n    vertical-align: top;\n    margin-left:5px;\n    }\n  .imgGallery{\n    width:100px;\n    height: 100px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    \n    }\nimg{\n    max-width: 100%;\n    max-height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<virtual-scroller #scroll [items]=\"images\" class=\"scrolling-wrapper\">\n  <div class=\"card\" *ngFor=\"let image of scroll.viewPortItems\">\n    <img class=\"imgGallery\" [src]=\"image\"/>\n  </div>\n</virtual-scroller>\n\n<div style=\"margin-left:auto;margin-right: auto;width:200px\" class=\"mainButtons\">\n  <button style=\"margin-top:200px\"><a routerLink=\"/camera\">Picture</a></button><br>\n  <button ><a routerLink=\"/gallery\">Gallery</a></button><br>\n  <button ><a routerLink=\"/preview\">Preview</a></button>\n  <button (click)=\"cropClicked()\">Crop</button>\n  <!-- <img [src]=\"path\"> -->\n  <img [src]=\"uploadImagePath\"class=\"selected-image\"/>\n</div>\n<div class=\"divButtons\">\n  <div class=\"camera-btn\"><img src=\"./assets/images/insert_photo_white_192x192.png\" class=\"img-camera-btn\"/></div>\n  <div class=\"camera-btn\"><img src=\"./assets/images/camera_white_192x192.png\" class=\"img-camera-btn\"/></div>\n  <div class=\"camera-btn\"><img src=\"./assets/images/camera_front_white_192x192.png\" class=\"img-camera-btn\"/></div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_image_preview_service__ = __webpack_require__("../../../../../src/app/shared/services/image-preview.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(previewService) {
        this.previewService = previewService;
        this.path = 'file:///storage/emulated/0/WhatsApp/Media/WhatsApp Images/IMG-20181122-WA0006.jpg';
        this.images = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.uploadImagePath=this.previewService.getImagePath();
        // console.log("Cache Path : ",cordova.file);
        // let date = new Date();
        // this.filename=date.getFullYear()+"_"+date.getMonth()+"_"+date.getDate()+"_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds()+".jpeg";
        // console.log("Filename in home: "+this.filename);
        for (var i = 0; i < 3000; i++) {
            this.images[i] = './assets/images/3.png';
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_image_preview_service__["a" /* ImagePreviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_image_preview_service__["a" /* ImagePreviewService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-preview/image-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    padding:0;\n    position: relative;\n    background-color:violet;\n    height: 100%;\n    margin: 0;\n    min-height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.preview-header{\n    background-color: black;\n    height: 50px;\n    width:100%;\n    -ms-flex: none;\n        flex: none;\n}\n.preview-content{\n    background-color: whitesmoke;\n    height: 300px;\n    width:100%;\n    -ms-flex: auto;\n        flex: auto;\n}\n.preview-footer{\n    background-color: rgb(0, 0, 0);\n    height: 90px;\n    width:100%;\n    -ms-flex: none;\n        flex: none;\n}\n.preview-image{\n    width:100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n.preview-header-btn{\n    width:40px;\n    height:40px;\n    float : right;\n    margin-top: 5px;\n    margin-right: 10px;\n    margin-left: 10px;\n    border-radius: 36px;\n}\n.preview-footer-btn{\n    width: 60px;\n    height: 60px;\n    border-radius: 36px;\n    border: 5px solid white;\n    float: right;\n    margin-right: 15px;\n    margin-top: 10px;\n    text-align: center;\n    padding-top: 9px;\n}\n.btn-img-upload{\n    width: 63%;   \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-preview/image-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"preview-header\" >\n    <div class=\"preview-header-btn\" (click)=\"cropClicked()\"><img src=\"./assets/images/crop_white_192x192.png\" style=\"width:100%\"/></div>\n    <div class=\"preview-header-btn\" (click)=\"resetClicked()\"><img src=\"./assets/images/autorenew_white_192x192.png\" style=\"width:100%\"/></div>\n  </div>\n\n  <div class=\"preview-content\">\n    <img class=\"preview-image\" [src]=\"imagePath\"/>\n  </div>\n\n\n  <div class=\"preview-footer\">\n    <div class=\"preview-footer-btn\" (click)=\"uploadClicked()\"><img src=\"./assets/images/check_white_192x192.png\" class=\"btn-img-upload\"/></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/image-preview/image-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_image_preview_service__ = __webpack_require__("../../../../../src/app/shared/services/image-preview.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagePreviewComponent = (function () {
    function ImagePreviewComponent(location, ngZone, previewService, router, activatedRoute) {
        this.location = location;
        this.ngZone = ngZone;
        this.previewService = previewService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.imagePath = "./assets/images/7.jpeg";
        this.ngZone.run(function () { });
    }
    ImagePreviewComponent.prototype.initImage = function () {
        this.imagePath = this.previewService.getImagePath();
    };
    ImagePreviewComponent.prototype.ngOnInit = function () {
        this.initImage();
        this.originalImagePath = this.imagePath;
    };
    ImagePreviewComponent.prototype.backButtonClicked = function () {
        this.location.back();
    };
    ImagePreviewComponent.prototype.cropClicked = function () {
        var _this = this;
        // console.log("Original",this.originalImagePath);
        plugins.crop.promise(this.originalImagePath, { quality: 100, targetWidth: -1, targetHeight: -1 })
            .then(function (path) {
            // path looks like 'file:///storage/emulated/0/Android/data/com.foo.bar/cache/1477008080626-cropped.jpg?1477008106566'
            console.log('Cropped Image Path!: ' + path);
            _this.previewService.setImagePath(path);
            _this.initImage();
        }).catch(function (error) {
            console.log(error);
        });
    };
    ImagePreviewComponent.prototype.resetClicked = function () {
        console.log("Reset called");
        this.previewService.setImagePath(this.originalImagePath);
        this.initImage();
    };
    ImagePreviewComponent.prototype.uploadClicked = function () {
        var _this = this;
        this.getFileContentAsBase64(this.imagePath, function (base64Image, contentType) {
            var imageBlob = _this.b64toBlob(base64Image, contentType, '');
            var photo = {
                'string64': base64Image.toString(),
                'blobfile': imageBlob,
                'filename': ''
            };
            console.log("Image : ", base64Image.toString(), "ImageBlob : ", imageBlob);
        });
        // let photo = {
        // 'string64' : success64.toString(),
        // 'blobfile' : imgBlob,
        // 'filename' : ''
        // }
        this.router.navigateByUrl('', { replaceUrl: true });
    };
    /**
   * This function will handle the conversion from a file to base64 format
   *
   * @path string
   * @callback function receives as first parameter the content of the image
   */
    ImagePreviewComponent.prototype.getFileContentAsBase64 = function (path, callback) {
        window.resolveLocalFileSystemURL(path, gotFile, fail);
        function fail(e) {
            alert('Cannot found requested file');
        }
        function gotFile(fileEntry) {
            fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    var content = this.result;
                    var base64result = content.split(',')[1];
                    var contentType = content.split(',')[0].split(":")[1].split(";")[0];
                    // console.log("Content:",content," Base64:",base64result," ContentType:",contentType);
                    callback(base64result, contentType);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
            });
        }
    };
    /**
   * Convert a base64 string in a Blob according to the data and contentType.
   *
   * @param b64Data {String} Pure base64 string without contentType
   * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
   * @param sliceSize {Int} SliceSize to process the byteCharacters
   * @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
   * @return Blob
   */
    ImagePreviewComponent.prototype.b64toBlob = function (b64Data, contentType, sliceSize) {
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
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    return ImagePreviewComponent;
}());
ImagePreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-image-preview',
        template: __webpack_require__("../../../../../src/app/image-preview/image-preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-preview/image-preview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_image_preview_service__["a" /* ImagePreviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_image_preview_service__["a" /* ImagePreviewService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], ImagePreviewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=image-preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/image-preview.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePreviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagePreviewService = (function () {
    function ImagePreviewService() {
        this.imagePath = './assets/images/7.jpeg';
    }
    ImagePreviewService.prototype.setImagePath = function (path) {
        this.imagePath = path;
        console.log("setImagePath : ", this.imagePath);
    };
    ImagePreviewService.prototype.getImagePath = function () {
        return this.imagePath;
    };
    return ImagePreviewService;
}());
ImagePreviewService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ImagePreviewService);

//# sourceMappingURL=image-preview.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map