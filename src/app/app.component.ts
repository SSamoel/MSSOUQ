import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title = 'MS_SOUQ';
  
  
  constructor(private translate : TranslateService) {
    translate.addLangs(['en','ar']);
    translate.setDefaultLang('ar');
    var language = localStorage.getItem('culture');
    
    if(language=='ar'){
      this.translate.use('ar');
      this.translate.setDefaultLang('ar');
      localStorage.setItem('culture','ar')
    }else{
      this.translate.use('en');
      this.translate.setDefaultLang('en');
      localStorage.setItem('culture','en')
    }
  }
  
   isEnglish() :boolean{
    localStorage.getItem('culture');
    return true;
   }
}
