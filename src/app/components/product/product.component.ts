import { Component, Input, OnInit } from '@angular/core';
import { DatumProducts } from '../../interfaces/interfaces';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: DatumProducts;

  constructor() {}

  ngOnInit() {}
}
