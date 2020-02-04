import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //value viene del body | filter:filterFilms, son los objetos films
  transform(value: any, arg: any): any {
    const resultFilms = [];
    for (let index = 0; index < value.length; index++) {
      const element = value[index];
      //titulo y busqueda en minuscula para mejores resultados
      if (element.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        //agrega elmento filtrado
        resultFilms.push(element);
      };     
    };
    return resultFilms;
  }


}
