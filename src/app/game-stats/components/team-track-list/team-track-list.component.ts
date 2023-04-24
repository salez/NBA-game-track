import { Component } from '@angular/core';
import { Team } from 'src/app/services/models/team.model';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-team-track-list',
  templateUrl: './team-track-list.component.html',
  styleUrls: ['./team-track-list.component.scss']
})
export class TeamTrackListComponent {

  daysFilter: number = 12;

  constructor(
    protected nbaService: NbaService,
  ) {}

  trackByTeamId(index: number, team: Team) {
    return team.id;
  }

}
