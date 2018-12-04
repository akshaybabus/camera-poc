import { TestBed, inject } from '@angular/core/testing';

import { ImagePreviewService } from './image-preview.service';

describe('ImagePreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagePreviewService]
    });
  });

  it('should be created', inject([ImagePreviewService], (service: ImagePreviewService) => {
    expect(service).toBeTruthy();
  }));
});
