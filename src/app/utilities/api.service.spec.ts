import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { UrlService } from './url.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [UrlService]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should check validation', () => {
    const service: ApiService = TestBed.get(ApiService);
    const passTestString = "passer";
    expect((service as any).validateInput( passTestString )).toBeTruthy();
    const failTestString = "";
    expect((service as any).validateInput( failTestString )).toBeFalsy();
  });

  it('should manufactor pagination', () => {
    const service: ApiService = TestBed.get(ApiService);
    let result = service.manufacturePagination(2, 1000, 30);
    let endList = [1,2,3,4,5];
    expect(result).toEqual( endList );
    result = service.manufacturePagination(2, 10, 30);
    endList = [1,2];
    expect(result).toEqual( endList );
  });
});
