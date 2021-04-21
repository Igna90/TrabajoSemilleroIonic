import { Component, Input, OnInit } from '@angular/core';
import { DatumPlagues } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-plaga',
  templateUrl: './plaga.component.html',
  styleUrls: ['./plaga.component.scss'],
})
export class PlagaComponent implements OnInit {

  @Input() plague: DatumPlagues;

  constructor() { }

  ngOnInit() {}

}
