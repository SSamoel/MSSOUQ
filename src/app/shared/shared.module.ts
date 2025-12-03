import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponet } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateComponent } from './translate/translate.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponet,
    FooterComponent,
    TranslateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule

  ],
  exports:[
    HeaderComponet,
    FooterComponent,
    RouterModule,
    TranslateModule

  ]
})
export class SharedModule { }

