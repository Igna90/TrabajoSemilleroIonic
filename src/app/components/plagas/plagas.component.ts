import { Component, Input, OnInit } from '@angular/core';
import { DatumPlagues } from '../../interfaces/interfaces';

@Component({
  selector: 'app-plagas',
  templateUrl: './plagas.component.html',
  styleUrls: ['./plagas.component.scss'],
})
export class PlagasComponent implements OnInit {

  @Input() plagues: DatumPlagues[] =  [];
  // tslint:disable-next-line: no-inferrable-types
  textoBusqueda: string = '';

  constructor() { }

  ngOnInit() {}

  onSearchChange( event ){
    this.textoBusqueda = event.detail.value;
  }

}
