import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbaService } from '@services/nba.service';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { Game } from '../../models/game.model';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent {

  team?: Team;
  games$?: Observable<Game[]>;

  constructor(private activatedRoute: ActivatedRoute, protected nbaService: NbaService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.team = this.nbaService.getTrackedTeams().find(team => team.abbreviation === paramMap.get("teamAbbr"));

      this.games$ = this.nbaService.gameCount$.pipe(
        switchMap(
          gameCount => this.team ? nbaService.getLastResults(this.team, gameCount) : EMPTY
        )
      );

    })
  }

}
