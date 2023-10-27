import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(des: string, limit: number): string {
    return des.split(' ').slice(0,limit).join(' ');
  }

}
