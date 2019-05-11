import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UtilitiesModule } from './../utilities/utilities.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UtilitiesModule.forRoot()
  ],
  exports: [
    UserComponent
  ]
})
export class CardModule { }
