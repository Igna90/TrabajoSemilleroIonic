import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { OpinionComponent } from './opinion/opinion.component';
import { PipesModule } from '../pipes/pipes.module';

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
    PipesModule
  ]
})
export class ComponentsModule { }
