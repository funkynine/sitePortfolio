import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  page = {
    title: "Home",
    subTitle: "Welcom to home page!",
    content: "Some content",
    image: '../assets/back.jpg'
  }

  constructor() { }

  ngOnInit() {
  }

}
