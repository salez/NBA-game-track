import { Component } from '@angular/core';
import {Observable, tap} from 'rxjs';
import { Team } from 'src/app/game-stats/models/team.model';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-team-track-list',
  templateUrl: './team-track-list.component.html',
  styleUrls: ['./team-track-list.component.scss']
})
export class TeamTrackListComponent {

  teams$: Observable<Team[]>;
  allTeams: Team[] = [];

  constructor(protected nbaService: NbaService) {
    this.teams$ = nbaService.getAllTeams().pipe(
      tap(data => this.allTeams = data)
    );
  }

  trackTeam(teamId: string): void {
    let team = this.allTeams.find(team => team.id == Number(teamId));
    if (team)
      this.nbaService.addTrackedTeam(team);
  }
}
