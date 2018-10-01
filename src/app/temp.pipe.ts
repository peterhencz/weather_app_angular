import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'tempInCelsius'})

export class TempPipe implements PipeTransform {
  transform(temp: number, f: number) {
    return temp - f;
  }
}

