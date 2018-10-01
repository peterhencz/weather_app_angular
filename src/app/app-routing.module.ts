import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TileComponent } from './tile/tile.component';
import { ForecastComponent } from './forecast/forecast.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  { path: 'board', component: BoardComponent }
];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});

@NgModule({
  imports: [ RouterModule.forRoot(routes)],

  exports: [ RouterModule ]
})
export class AppRoutingModule { }
