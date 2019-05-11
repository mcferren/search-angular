import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private rootA : string = "https://api.github.com/search/users?";
  private rootB : string = "https://api.github.com/users/";

  constructor() { }

  public fetchUserUrl( params : { q : string, page ?: number }, suffix = "", idx = 0 ) : string {

      for( let keyword in params ) {

        suffix += `${idx > 0 ? '&' : ''}${keyword}=${params[ keyword ]}`;

        ++idx
      }

      return `${this.rootA}${suffix}`;
  }

  public fetchStarUrl( user : string) : string {
    
    return `${this.rootB}${user}/followers`;
  }

  public fetchFollowerUrl( user : string) : string {
    
    return `${this.rootB}${user}/starred`;
  }
}
