import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  checkStatus = false;
  procent: Number;

  


  constructor() { }

  ngOnInit() {
    this.subscription()
  }

  subscription() {
    const halfHeight = (document.body.offsetHeight / 2) - (window.innerHeight * 1.5);

    fromEvent(window, 'scroll')
      .subscribe(() => {
        if (window.pageYOffset > halfHeight) {
          this.checkStatus = true;
        }
    });
  }  

}
