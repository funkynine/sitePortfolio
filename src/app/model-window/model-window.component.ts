import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-model-window',
  templateUrl: './model-window.component.html',
  styleUrls: ['./model-window.component.sass']
})
export class ModelWindowComponent implements OnInit {

  nameControl: FormControl;
  emailControl: FormControl;
  phoneControl: FormControl;


  constructor(private matDialogRef: MatDialogRef<ModelWindowComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.nameControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.emailControl = new FormControl('', [Validators.email, Validators.minLength(5)]);
  }

  public closeModal(){
    this.matDialogRef.close()
  }

}
