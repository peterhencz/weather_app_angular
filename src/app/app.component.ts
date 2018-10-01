import { Component, Input, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { trigger, animate, style, group, query, transition } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { backGroundAnimation } from './tile-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ backGroundAnimation ]
})

export class AppComponent {
  @Input() selectedTile: Tile;

  title = 'WEATHER APP';
  color: string;
  
  selectTile(tile): void {
    const code = tile.weather[0].icon;
    this.color = this.getColor(code);
  }

  getColor(code) {
    console.log(code);
    switch (code) {
      case '01d':
        return 'radial-gradient(blue, red)';
      case '01n':
        return 'radial-gradient(blue, red)';
      case '02d':
        return 'radial-gradient(blue, red)';
      case '02n':
        return 'radial-gradient(blue, red)';
      case '03d':
        return 'radial-gradient(blue, red)';
      case '03n':
        return 'radial-gradient(blue, red)';
      case '04d':
        return 'radial-gradient(blue, red)';
      case '04n':
        return 'radial-gradient(blue, red)';
      case '09d':
        return 'radial-gradient(blue, red)';
      case '09n':
        return 'radial-gradient(blue, red)';
      case '10d':
        return 'radial-gradient(blue, red)';
      case '10n':
        return 'radial-gradient(blue, red)';
      case '11d':
        return 'radial-gradient(blue, red)';
      case '11n':
        return 'radial-gradient(blue, red)';
      case '13d':
        return 'radial-gradient(blue, red)';
      case '13n':
        return 'radial-gradient(blue, red)';
      case '50d':
        return 'radial-gradient(blue, red)';
      case '50n':
        return 'radial-gradient(blue, red)';            
    }
  }

}
