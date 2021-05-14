import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatumProducts } from '../../interfaces/interfaces';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product: DatumProducts;


  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  async openModal(id: number) {
    const modal = await this.modalController.create({
      component: MyModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        name: this.product.name,
        img: this.product.img,
        how_to_use: this.product.how_to_use,
      }
    });
    return await modal.present();
  }
}
