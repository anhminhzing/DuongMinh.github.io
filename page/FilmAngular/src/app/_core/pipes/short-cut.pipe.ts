import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortCut'
})
export class ShortCutPipe implements PipeTransform {

  transform(value: any,length:any): any {
    return value.substr(0,length) + '...';
  }

}
