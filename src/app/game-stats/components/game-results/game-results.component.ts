import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { Game } from 'src/app/game-stats/models/game.model';
import { Team } from 'src/app/game-stats/models/team.model';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css']
})
export class GameResultsComponent {

  team?: Team;
  games$?: Observable<Game[]>;

  constructor(private activatedRoute: ActivatedRoute, private nbaService: NbaService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
        this.team = this.nbaService.getTrackedTeams().find(team => team.abbreviation === paramMap.get("teamAbbr"));
        if (this.team)
          this.games$ = this.nbaService.getLastResults(this.team);
    })
  }

}
