import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  images = ['../../assets/ione4.png',
            '../../assets/proj2.png',
            '../../assets/miniShop2.png'];


  page = {
    title: "Something about me",
    image: '../assets/photo.jpg'
  }

  constructor() { }

  ngOnInit() {
  }

}
