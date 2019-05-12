import { TestBed } from '@angular/core/testing';

import { UrlService } from './url.service';
import { HttpClientModule } from '@angular/common/http';

describe('UrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: UrlService = TestBed.get(UrlService);
    expect(service).toBeTruthy();
  });

  it('should star url', () => {
    const service: UrlService = TestBed.get(UrlService);
    const testUsername = "Ben";
    const expectation = "https://api.github.com/users/Ben/starred"
    expect(service.fetchStarUrl( testUsername )).toEqual( expectation );
  });

  it('should follower url', () => {
    const service: UrlService = TestBed.get(UrlService);
    const testUsername = "Ben";
    const expectation = "https://api.github.com/users/Ben/followers"
    expect(service.fetchFollowerUrl( testUsername )).toEqual( expectation );
  });

  it('should fetch url', () => {
    const service: UrlService = TestBed.get(UrlService);
    const testParamObj = {
      q : "tom+smith", 
      page : 3
    };
    const expectation = "https://api.github.com/search/users?q=tom+smith&page=3"
    expect(service.fetchUserUrl( testParamObj )).toEqual( expectation );
  });
});
