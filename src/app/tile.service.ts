import { Injectable } from '@angular/core';

import { Tile } from './tile';

import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TileService {

  constructor( private http: HttpClient ) { 
    
  }

  getData(city: string): Observable<JSON> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7257dfb135c8fcd4ac3b2fbf49fadc31`;
    return this.http.get<JSON>(url);
  }
}
