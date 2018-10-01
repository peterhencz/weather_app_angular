import { Component, OnInit, EventEmitter, Output, Input, Pipe, PipeTransform } from '@angular/core';
import { Tile } from '../tile';
import { TileService } from '../tile.service';
import { ForecastComponent } from '../forecast/forecast.component';
import { Pipe, PipeTransform } from '@angular/core';
import { TempPipe } from '../temp.pipe';
import { trigger, animate, style, group, query, transition } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { tileAnimation } from '../tile-animation';
import { ColorPipe } from '../color.pipe';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  animations: [ tileAnimation ]
})

export class TileComponent implements OnInit {
  
  state: string;
  tiles: Tile[] = [];
  places = ['Zalaegerszeg', 'Budapest', 'Mumbai', 'Barcelona', 'Rotterdam', 'Anchorage'];
  @Output() selectedTileEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(public tileService: TileService) { }

  ngOnInit() {
    this.getTiles();
   }

  getTiles(): void {
    for (let i = 0; i < this.places.length; i++) {
    this.tileService.getData(this.places[i])
      .subscribe((e: any) => {
        const city = new Tile(e.city.name, e.city.country);
        city.createWeather(Math.round(e.list[0].main.temp),
        e.list[0].weather[0].icon,
        e.list[0].weather[0].description
        );
        const icon = e.list[0].weather[0].icon;
        this.state = 'tile';
        this.tiles.push(city);
      })
    }
  }

  onSelect(tile: Tile): void {
    this.selectedTileEmitter.emit(tile);
  }
}
