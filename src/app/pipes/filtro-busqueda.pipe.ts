import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusqueda'
})
export class FiltroBusquedaPipe implements PipeTransform {

  transform(plagas: any[], busqueda: string = ''): any[]  {

    if ( busqueda === '') {
      return plagas;
    }

    if (!plagas) {
      return plagas;
    }

    busqueda = busqueda.toLocaleLowerCase();

    return plagas.filter(
      item => item.name.toLowerCase().includes ( busqueda )
     );
  }

}
