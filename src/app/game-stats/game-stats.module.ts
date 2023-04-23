import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameResultsComponent } from './components/game-results/game-results.component';
import { TeamStatsComponent } from './components/team-stats/team-stats.component';
import { GameStatsRoutingModule } from './game-stats-routing.module';
import { TeamTrackListComponent } from './components/team-track-list/team-track-list.component';
import { ModalModule } from '../shared/modal/modal.module';

@NgModule({
  declarations: [
    GameResultsComponent,
    TeamTrackListComponent,
    TeamStatsComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    GameStatsRoutingModule
  ]
})
export class GameStatsModule { }
