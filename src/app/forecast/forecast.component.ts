import { Component, OnChanges, Input } from '@angular/core';
import { Tile, Forecast } from '../tile';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TileService } from '../tile.service';
import { forecastAnimation } from '../tile-animation';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
  animations: [ forecastAnimation ]
})

export class ForecastComponent implements OnChanges {
  @Input() selectedTile: Tile;
  @Input() forecast: Forecast;

  forecasts: Forecast[] = [];

  constructor(
    private route: ActivatedRoute,
    private tileService: TileService,
    private location: Location
    ) { }

  ngOnChanges(): void {
    if (this.selectedTile !== undefined) {
      this.getForecast();  
    }
  }

  getForecast(): void {
    this.tileService.getData(this.selectedTile.city)
      .subscribe((e: any) => {
        this.forecast = new Forecast(e.city.name);
        for (let i = 0; i < 9; i++) { 
          const dailyForecast = e.list[i];
          this.forecast.createForecast(Math.round(e.list[i].main.temp - 273), 
            e.list[i].dt_txt, e.list[i].weather[0].icon, e.list[i].weather[0].main);
          this.forecasts.push(dailyForecast);
        }
      })
  }
}
