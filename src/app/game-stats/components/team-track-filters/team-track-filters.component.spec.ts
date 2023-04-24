import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTrackFiltersComponent } from './team-track-filters.component';

describe('TeamTrackFiltersComponent', () => {
  let component: TeamTrackFiltersComponent;
  let fixture: ComponentFixture<TeamTrackFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTrackFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTrackFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
