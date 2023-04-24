import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, Observable, switchMap, tap} from 'rxjs';
import { Game } from 'src/app/services/models/game.model';
import { Stats } from 'src/app/services/models/stats.model';
import { Team } from 'src/app/services/models/team.model';
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
    this.games$ = this.nbaService.gameCount$.pipe(
      switchMap(gameCount => this.nbaService.getLastResults(this.team, gameCount).pipe(
        tap(games => {
          this.stats = this.nbaService.getStatsFromGames(games, this.team)
        })
      ))
    )
  }
}
