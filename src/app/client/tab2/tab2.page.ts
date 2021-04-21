import { Component, Input, OnInit } from '@angular/core';
import { ApiServicesService } from './../../services/api-services.service';
import {  DatumPlagues, ResPlagues } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  plagues: any;
  @Input() plague: DatumPlagues;

  constructor(private apiServicesService: ApiServicesService) {}
  ngOnInit() {
    this.apiServicesService.getPlagues().then(
      (res: ResPlagues) => {
        if (res.success) {
          this.plagues = res.data;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
