import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { OpinionComponent } from './opinion/opinion.component';



@NgModule({
  declarations: [
    OpinionesComponent,
    OpinionComponent
  ],
  exports: [
    OpinionesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
