import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  sectionClass: string = "my-lg-5 py-lg-5 my-md-5 py-md-5 py-3 my-3";

  constructor() {
  }

  ngOnInit(): void {
    
  }
  

}
