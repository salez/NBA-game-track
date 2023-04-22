import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameResultsComponent } from './components/game-results/game-results.component';
import { TeamTrackListComponent } from './components/team-track-list/team-track-list.component';

const routes: Routes = [
  { path: '', component: TeamTrackListComponent },
  { path: 'results', component: TeamTrackListComponent },
  { path: "results/:teamAbbr", component: GameResultsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameStatsRoutingModule { }
