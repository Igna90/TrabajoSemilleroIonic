import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { OpinionComponent } from './opinion/opinion.component';
import { PipesModule } from '../pipes/pipes.module';
import { PlagasComponent } from './plagas/plagas.component';
import { PlagaComponent } from './plaga/plaga.component';

@NgModule({
  declarations: [
    OpinionesComponent,
    OpinionComponent,
    PlagasComponent,
    PlagaComponent
  ],
  exports: [
    OpinionesComponent,
    PlagasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
