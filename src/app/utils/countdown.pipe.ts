import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {

  transform(value: number, args?: any): any {
      const minutes = value / 60;
      const seconds = value % 60;
      return Math.floor(minutes / 10) + '' + Math.floor(minutes % 10) + ':' + Math.floor(seconds / 10) + '' + Math.floor(seconds % 10);
  }
}
