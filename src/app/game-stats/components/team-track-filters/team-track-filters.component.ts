import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, startWith, switchMap, tap } from 'rxjs';
import { Team, TeamDataCollection } from 'src/app/services/models/team.model';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-team-track-filters',
  templateUrl: './team-track-filters.component.html',
  styleUrls: ['./team-track-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamTrackFiltersComponent {

  readonly filterForm: FormGroup;

  protected readonly FILTER_DAYS_RANGE = [6, 12, 20];
  protected readonly teamsDataCollection$: Observable<TeamDataCollection>;

  protected readonly conferences$ = this.nbaService.teamsDataCollection$.pipe(
    map(teamsCollection => teamsCollection.conferences),
  );

  protected readonly divisions$ = this.nbaService.teamsDataCollection$.pipe(
    map(teamsCollection => teamsCollection.divisions),
  );

  protected readonly filteredDivisions$: Observable<string[]>;
  protected readonly filteredTeams$: Observable<Team[]>;

  constructor(
    protected nbaService: NbaService,
    private formBuilder: FormBuilder
  ) {
    this.teamsDataCollection$ = nbaService.getTeams();

    this.filterForm = this.formBuilder.group({
      conference: '',
      division: '',
      team: '',
      gameCount: nbaService.getCurrentGameCount()
    });

    this.filteredDivisions$ = this.filterForm.controls['conference'].valueChanges.pipe(
      startWith(''),
      switchMap((selectedConference: string) => this.divisions$.pipe(
        map(divisions => divisions
          .filter(division => selectedConference === '' || division.conference === selectedConference)
          .map(division => division.name)
        ),
        tap(() => this.resetDivision())
      ))
    );

    this.filteredTeams$ = combineLatest([
      this.filterForm.controls['conference'].valueChanges.pipe(startWith('')),
      this.filterForm.controls['division'].valueChanges.pipe(startWith(''))
    ]).pipe(
      switchMap(([conference, division]: [string, string]) => this.teamsDataCollection$.pipe(
        map(teamsDataCollection => teamsDataCollection.teams.filter(team => {
          const conferenceMatch = conference === '' || team.conference === conference;
          const divisionMatch = division === '' || team.division === division;
          return conferenceMatch && divisionMatch
        })),
        tap(() => this.resetTeam())
      ))
    );
  }

  private resetDivision() {
    this.filterForm.controls['division'].setValue('');
  }

  private resetTeam() {
    this.filterForm.controls['team'].setValue('');
  }

  trackTeam(teamId: string): boolean {
    if(!this.nbaService.addTrackedTeam(+teamId))
      return false;

    this.resetTeam();
    return true;
  }
}