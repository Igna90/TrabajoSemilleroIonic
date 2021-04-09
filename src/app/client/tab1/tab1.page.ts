import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from './../../services/api-services.service';
import { AlertController } from '@ionic/angular';
import { ResOpinions } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  opinions: any;
  token: any;
  constructor(
    private apiServicesService: ApiServicesService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
      this.apiServicesService.getOpinions().then(
        (res: ResOpinions) => {
          if (res.success) {
            this.opinions = res.data;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

