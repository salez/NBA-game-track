import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameResultsComponent } from './game-stats/components/game-results/game-results.component';
import { TeamListComponent } from './game-stats/components/team-list/team-list.component';

const routes: Routes = [{
  path: "results/:teamAbbr", component: GameResultsComponent
}, {
  path: "**", component: TeamListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
