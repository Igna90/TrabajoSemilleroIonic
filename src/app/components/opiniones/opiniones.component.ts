import { Component, Input, OnInit } from '@angular/core';
import {  DatumOpinion } from '../../interfaces/interfaces';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.scss'],
})
export class OpinionesComponent implements OnInit {

@Input() opiniones: DatumOpinion[] =  [];

  constructor() { }

  ngOnInit() {}

}
