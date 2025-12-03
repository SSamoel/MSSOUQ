import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  constructor(private trnaslate : TranslateService) {
    trnaslate.addLangs(['en','ar']);
    trnaslate.setDefaultLang('ar');
    localStorage.setItem('culture','ar');
   }

  ngOnInit(): void {
  }
  toggleLang(){
    var lang= localStorage.getItem('culture');
    if(lang == 'ar'){
      this.trnaslate.setDefaultLang('en');
      this.trnaslate.use('en');
      localStorage.setItem('culture','en')
    }else{
      this.trnaslate.setDefaultLang('ar');
      this.trnaslate.use('ar')
      localStorage.setItem('culture','ar');
    }
  }

}
