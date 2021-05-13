import { Component, Input, OnInit } from '@angular/core';
import { DatumProducts, ResProducts } from 'src/app/interfaces/interfaces';
import { ApiServicesService } from 'src/app/services/api-services.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  products: any;
  @Input() product: DatumProducts;

  constructor(private apiServicesService: ApiServicesService) {}

  ngOnInit() {
    this.apiServicesService.getProducts().then(
      (res: ResProducts) => {
        if (res.success) {
          this.products = res.data;
        }
      },
      (error) => {
        console.error(error);
      }
    );
    }
}
