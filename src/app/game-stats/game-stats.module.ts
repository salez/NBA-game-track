import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameResultsComponent } from './components/game-results/game-results.component';
import { TeamStatsComponent } from './components/team-stats/team-stats.component';
import { GameStatsRoutingModule } from './game-stats-routing.module';
import { TeamTrackListComponent } from './components/team-track-list/team-track-list.component';

@NgModule({
  declarations: [
    GameResultsComponent,
    TeamTrackListComponent,
    TeamStatsComponent
  ],
  imports: [
    CommonModule,
    GameStatsRoutingModule
  ]
})
export class GameStatsModule { }
