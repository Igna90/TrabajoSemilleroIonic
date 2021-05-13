import { Component, Input, OnInit } from '@angular/core';
import { DatumProducts } from '../../interfaces/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  @Input() products: DatumProducts[] =  [];

  constructor() { }

  ngOnInit() {}

}
