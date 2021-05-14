import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatumProducts } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss'],
})
export class MyModalComponent implements OnInit {

  @Input() name: DatumProducts;
  @Input() img: DatumProducts;
  // tslint:disable-next-line: variable-name
  @Input() how_to_use: DatumProducts;


  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
