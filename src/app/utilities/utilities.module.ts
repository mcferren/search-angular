import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { UrlService } from './url.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule
  ]
})
export class UtilitiesModule { 

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilitiesModule,
      providers: [ 
        UrlService,
        ApiService 
      ]
    };
  }
}
