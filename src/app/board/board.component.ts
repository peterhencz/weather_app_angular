import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routerTransition } from '../router-animations';
import { TileComponent } from '../tile/tile.component';
import { ForecastComponent } from '../forecast/forecast.component';
import { TileService } from '../tile.service';
import * as moment from 'moment';
import { BrowserModule } from '@angular/platform-browser';
import { tileAnimation, backGroundAnimation } from '../tile-animation';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  
  selectedTile;
  date = moment().format("h : mm : ss");
  @Output() selectedTileEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.time();
  }

  selectTile(tile) {
    this.selectedTile = tile;
    this.selectedTileEmitter.emit(tile);
  }

  time(): void {
    setInterval(() => {
      this.date = moment().format("h : mm : ss");
    }, 1000);
  }

}
