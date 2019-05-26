 import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('expects service to fetch data',
  inject([HttpTestingController, ApiService],
    (httpMock: HttpTestingController, service: ApiService) => {
      // We call the service
      service.getFeeds('nature').subscribe(data => {
        expect(data['data']).toEqual(dataDummy);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('/api/feeds?tags=nature');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      var dataDummy = {
        "images": [
            {
                "title": "Lines",
                "imageUrl": "https://live.staticflickr.com/65535/47925076017_8d07d21ceb_m.jpg",
                "imgWidth": "173",
                "imgHeight": "240"
            },
            {
                "title": "19.05 - Молодежный бал 2019 (024 of 262)_.jpg",
                "imageUrl": "https://live.staticflickr.com/65535/47925077927_fec82df589_m.jpg",
                "imgWidth": "240",
                "imgHeight": "160"
            },
            {
                "title": "Monroe \"Bluthund mit Karakter\" HDT Trained",
                "imageUrl": "https://live.staticflickr.com/65535/47925078316_0322363d7b_m.jpg",
                "imgWidth": "135",
                "imgHeight": "240"
            }
          ]}
      req.flush({data: dataDummy});
    })
);

afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
  httpMock.verify();
}));

});
