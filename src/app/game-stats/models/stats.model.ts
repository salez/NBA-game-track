import { Result } from "./game.model";

export interface Stats {
  wins: number;
  losses: number;
  averagePointsScored: number;
  averagePointsConceded: number;
  lastGames: Result[];
}


