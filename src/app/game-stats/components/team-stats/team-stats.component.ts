import {Component, Input, OnInit} from '@angular/core';
import { NbaService } from '@services/nba.service';
import {Observable, switchMap, tap} from 'rxjs';
import { Game } from '../../models/game.model';
import { Stats } from '../../models/stats.model';
import { Team } from '../../models/team.model';

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
    this.games$ = this.nbaService.gameCount$.pipe(
      switchMap(gameCount => this.nbaService.getLastResults(this.team, gameCount).pipe(
        tap(games => {
          this.stats = this.nbaService.getStatsFromGames(games, this.team)
        })
      ))
    )
  }
}
