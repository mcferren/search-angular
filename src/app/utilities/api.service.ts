import { Injectable }       from '@angular/core';
import { HttpClient }       from '@angular/common/http';
import { UrlService }       from './url.service';
import { Observable, of, BehaviorSubject }   from 'rxjs';
import { map }              from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public userChannel : BehaviorSubject<any>;

  constructor( private http : HttpClient,
               private url  : UrlService ) { 

    this.userChannel = new BehaviorSubject(null);
  }

  private validateInput( input : string ) : boolean {

     return !!input && input.length > 0;
  }

  public async fetchUsers( input : string, page : number ) {

     const valid = this.validateInput( input );

     if( !valid ) { return; }

     const params = {
        q : input.split(" ").join("+"),
        page
     };

     const userobj = await this.http.get( this.url.fetchUserUrl( params )).toPromise();

     this.userChannel.next( userobj );
  }

  public fetchStarCount( user : string ) : Observable<number> {

    return this.http.get( this.url.fetchStarUrl( user ) )
               .pipe( map( ( x : any[] )=> x.length ) );      
  }

  public fetchFollowerCount( user : string ) : Observable<number> {

    return this.http.get( this.url.fetchFollowerUrl( user ) )
               .pipe( map( ( x : any[] )=> x.length ) );      
  }

  public manufacturePagination( page : number, totalCount : number, perPage : number ) : number[] {

      const totalPagBoxes = Math.round( totalCount / perPage );
      
      let returnArray = [ page ];

      while( returnArray.length < 4 && returnArray.slice(-1)[0] < totalPagBoxes ) { 
               
        returnArray.push( returnArray.slice(-1)[0] + 1 ); 
      }

      while( returnArray.length < 7 && returnArray[0] > 1 ) { 
               
        returnArray.unshift( returnArray[0] - 1 ); 
      }

      return returnArray;
  }
}
