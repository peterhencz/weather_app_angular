import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { ForecastComponent } from './forecast/forecast.component';
import { AppRoutingModule } from './app-routing.module';
import { TileService } from './tile.service';
import { HttpClientModule } from '@angular/common/http';
import { TileSearchComponent } from './tile-search/tile-search.component';
import { BoardComponent } from './board/board.component';
import { Pipe, PipeTransform } from '@angular/core';
import { TempPipe } from './temp.pipe';
import { ColorPipe } from './color.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    ForecastComponent,
    TileSearchComponent,
    BoardComponent,
    TempPipe,
    ColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
  TileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
