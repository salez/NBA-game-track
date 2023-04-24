export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface Division {
  name: string;
  conference: string;
}

export interface TeamDataCollection {
  conferences: string[],
  divisions: Division[],
  teams: Team[],
}
