import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltroBusquedaPipe } from './filtro-busqueda.pipe';

@NgModule({
  declarations: [FiltroPipe, FiltroBusquedaPipe],
  exports: [FiltroPipe, FiltroBusquedaPipe],

  imports: [CommonModule],
})
export class PipesModule {}
