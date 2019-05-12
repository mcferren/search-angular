import { Component } from '@angular/core';
import { ApiService } from './utilities/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public page : number;
  public input : string;
  public paginationLinks : number[];
  private perPage : number = 30;

  constructor( public api : ApiService ) {

    this.page = 1;

    this.api.userChannel.subscribe( arg => {

      if( !arg ) { return; }
        
      this.paginationLinks = this.api.manufacturePagination( this.page, arg.total_count, this.perPage );
    });
  }

  public handlePaginationClick(i: number) {  // +1 bc github paginates zero and 1 as the same fetch

    this.api.userChannel.next(null); // to auto scroll to top of page

    this.page = i;

    this.api.fetchUsers(this.input, i)
  }

  public handleSearchButtonClick() {

    this.api.fetchUsers(this.input, 1);

    this.page = 1;
  }
}
