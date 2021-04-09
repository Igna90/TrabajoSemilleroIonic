import { Component, Input, OnInit } from '@angular/core';
import { DatumOpinion } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss'],
})
export class OpinionComponent implements OnInit {

  @Input() opinion: DatumOpinion;

  constructor() { }

  ngOnInit() {}

}
