import { Component } from '@angular/core';
import { NbaService } from '@services/nba.service';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team-track-list',
  templateUrl: './team-track-list.component.html',
  styleUrls: ['./team-track-list.component.scss']
})
export class TeamTrackListComponent {
  constructor(
    protected nbaService: NbaService,
  ) {}

  trackByTeamId(index: number, team: Team) {
    return team.id;
  }

}
