import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLength'
})
export class StringLengthPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value.length > 50)
      return `${value.substring(0, 49)}...`;
    return value
  }

}
