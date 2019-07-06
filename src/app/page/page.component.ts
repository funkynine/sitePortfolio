import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);


  page = {
    title: "Something about me",
    subTitle: "Welcom to home page!",
    content: "Some content",
    image: '../assets/photo.jpg'
  }

  constructor() { }

  ngOnInit() {
  }

}
