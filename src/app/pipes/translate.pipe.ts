import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(name: boolean, ...args: any[]): string {
    if(name==true) return "Tak";
    else return "Nie";
  }

}
