import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "gamestats", loadChildren: () => import('./game-stats/game-stats.module').then(m => m.GameStatsModule) },
  { path: "**", redirectTo: "gamestats" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
