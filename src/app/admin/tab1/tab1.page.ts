import { Component } from '@angular/core';
import { ApiServicesService } from './../../services/api-services.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  users: any;
  token: any;

  constructor(
    private apiServicesService: ApiServicesService,
    private alertController: AlertController
  ) {}

  getUsers() {
    this.apiServicesService.getUsers().then(
      (res: any) => {
        if (res.success) {
          this.users = res.data;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
