import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kodTrans'
})
export class KodTransPipe implements PipeTransform {

  transform(ile: number, ...args: any[]): string {
    if(ile>1) return "Kody zamienników";
    else return "Kod zamiennika";
  }

}
