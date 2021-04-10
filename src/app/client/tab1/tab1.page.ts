import { Component, Input, OnInit } from '@angular/core';
import { ApiServicesService } from './../../services/api-services.service';
import { DatumOpinion, DatumPlagues, ResOpinions, ResPlagues } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  opinions: any;
  plagues: any;
  token: any;
  @Input() plague: DatumPlagues;
  @Input() opinion: DatumOpinion;

  constructor(
    private apiServicesService: ApiServicesService,
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

    onChange(event){
      if (event.detail.value == -1) {
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
      }else {
      this.showFilter(event.detail.value);
      }
    }
    showFilter(id: number) {
      this.apiServicesService.getOpinions().then(
        (res: ResOpinions) => {
          if (res.success) {
            this.opinions = [];
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < res.data.length; i++) {
              const element = res.data[i];
              // tslint:disable-next-line: triple-equals
              if (element.plague_id == id) {
                this.opinions.push(element);
              }
            }
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }

  }

