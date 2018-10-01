import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'backgroundCode' })

export class ColorPipe implements PipeTransform {

  static COLORS: any[] = [
    {
      "code": "10d",
      "color": 'green'
    },
    {
      "code": "01d",
      "color": 'pink'
    },
    {
      "code": "02d",
      "color": 'yellow'
    },
    {
      "code": "03n",
      "color": 'blue'
    },
    {
      "code": "03d",
      "color": 'green'
    } 
  ];

  transform(code: string, color: string) {
    return ColorPipe.COLORS[code][color];
  }
}

// [ngStyle]="{'background-color':onSelect(tile.weather[0].icon)}"