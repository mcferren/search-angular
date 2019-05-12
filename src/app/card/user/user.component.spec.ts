import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { ApiService } from 'src/app/utilities/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [HttpClientModule],
      providers: [ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.userobj = { login : "mocker" };
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.userobj).toBeDefined();
  });
});
