import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-model-window',
  templateUrl: './model-window.component.html',
  styleUrls: ['./model-window.component.sass']
})
export class ModelWindowComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ModelWindowComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public closeModal(){
    this.matDialogRef.close()
  }

}
