import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(likes: number) {
    if (likes > 3) {
      return likes + ' likes';
    }else{
      return null;
    }
  }
}
