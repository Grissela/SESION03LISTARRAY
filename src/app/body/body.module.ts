import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';



@NgModule({
  declarations: [
    TitleComponent,
    CuerpoComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    CuerpoComponent,
    
  ],
})
export class BodyModule { }
