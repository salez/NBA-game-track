import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamTrackListComponent } from './team-track-list.component';

describe('TeamListComponent', () => {
  let component: TeamTrackListComponent;
  let fixture: ComponentFixture<TeamTrackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTrackListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
