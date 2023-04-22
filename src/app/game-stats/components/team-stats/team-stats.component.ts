import {Component, Input, OnInit} from '@angular/core';
import {Observable, tap} from 'rxjs';
import { Game } from 'src/app/game-stats/models/game.model';
import { Stats } from 'src/app/game-stats/models/stats.model';
import { Team } from 'src/app/game-stats/models/team.model';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.scss']
})
export class TeamStatsComponent implements OnInit {

  @Input()
  team!: Team;

  games$!: Observable<Game[]>;
  stats!: Stats;
  constructor(protected nbaService: NbaService) { }

  ngOnInit(): void {
    this.games$ = this.nbaService.getLastResults(this.team, 12).pipe(
      tap(games =>  this.stats = this.nbaService.getStatsFromGames(games, this.team))
    )
  }

}
