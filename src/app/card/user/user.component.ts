import { Component, 
         OnInit,
         Input } from '@angular/core';
import { ApiService } from './../../utilities/api.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userobj;

  public starCount;
  public followerCount;

  constructor( private api : ApiService ) { }

  ngOnInit() {

      const { login : username } = this.userobj;

      this.api.fetchFollowerCount( username ).subscribe( arg => this.followerCount = arg );

      this.api.fetchStarCount( username ).subscribe( arg => this.starCount = arg );
  }

  public handleClick() { 
    
    window.open( this.userobj.html_url ); 
  }
}
