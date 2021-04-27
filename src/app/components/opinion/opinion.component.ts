import { Component, Input, OnInit } from '@angular/core';
import { DatumOpinion } from 'src/app/interfaces/interfaces';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss'],
})
export class OpinionComponent implements OnInit {
  @Input() opinion: DatumOpinion;

  meGusta = false;

  constructor(private apiServicesService: ApiServicesService) {}

  ngOnInit() {}

  async onClick(id: number) {
    this.meGusta = !this.meGusta;

    if (this.meGusta === true) {
      this.apiServicesService.createLike(id).then(
        (res: any) => {
          if (res.success) {
            this.opinion.num_likes += 1;

            console.log(id);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      // this.apiServicesService.createLike(id).then(
      //   (res: any) => {
      //     if (res.success) {
      //       this.opinion.num_likes -= 1;

      //       console.log(id);
      //     }
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );
    }
  }

  // updateLike(){

  // }
}
