import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section8Component } from './section8/section8.component';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../shared/shared.module';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageRoutingModule } from './home-page-routing.module';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeIntroComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section8Component,

  ],
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule,
    TranslateModule.forChild()

  ]
})
export class HomePageModule { }
