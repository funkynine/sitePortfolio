import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  images = ['../../assets/ione4.png',
            '../../assets/proj2.png',
            '../../assets/miniShop1.png',
            '../../assets/miniShop2.png'];


  page = {
    title: "Something about me",
    image: '../assets/photo.jpg'
  }

  checkStatus = false;

  constructor() { }

  ngOnInit() {
    this.subscription()
  }

  // subscription() {
  //   fromEvent(document, 'click')
  //     .subscribe(() => {
  //       this.checkStatus = !this.checkStatus;
  //     });
  // }

  subscription() {
    const halfHeight = (document.body.offsetHeight / 2) - (window.innerHeight * 1.5);

    fromEvent(window, 'scroll')
      .subscribe(() => {
        if (window.pageYOffset > halfHeight) {
          this.checkStatus = true;
        }
    });
  }

  // private subscriber(): void {
  //   const halfHeight = (this.document.body.offsetHeight / 2) - (window.innerHeight * 1.5);
  //   this.scrollSubscription$ = fromEvent(window, 'scroll')
  //     .subscribe(() => {
  //       if (window.pageYOffset > halfHeight) {
  //         this.createAccountModal();
  //       }
  //     });
  // }

}
