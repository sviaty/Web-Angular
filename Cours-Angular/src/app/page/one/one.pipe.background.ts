import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pageBackgroundColor'})
export class AppBackgroundColorPipe implements PipeTransform {
  transform(type: string): string {

    let style: string;
    switch (type) {
      case 'Feu':
        style = 'background-turquoise';
        break;
      default:
        style = 'background-silver';
        break;
    }

    return style;
  }
}
