import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CameraComponent } from './camera/camera.component';
import { CDVPhotoLibraryPipe } from './cdvphoto-library.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImagePreviewService } from './shared/services/image-preview.service';
import { CompressImageComponent } from './compress-image/compress-image.component';
import { ImageCompressService,ResizeOptions,ImageUtilityService } from 'ng2-image-compress';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'preview', component: ImagePreviewComponent },
  { path: 'compress-image', component: CompressImageComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    HomeComponent,
    CDVPhotoLibraryPipe,
    GalleryComponent,
    ImagePreviewComponent,
    CompressImageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ), 
    VirtualScrollerModule
  ],
  providers: [ImagePreviewService,ImageCompressService,ResizeOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
