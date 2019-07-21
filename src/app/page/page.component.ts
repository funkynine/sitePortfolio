import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ModelWindowComponent } from '../model-window/model-window.component';


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

  
  name = "Message";

  checkStatus = false;

  constructor(private dialog: MatDialog) {}

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

  openDialog(): void {
  this.dialog.open(ModelWindowComponent, {
      width: '400px',
      data: {name: this.name}
    });
  }
}
