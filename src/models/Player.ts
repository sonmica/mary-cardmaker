import type PlayerClass from "./PlayerClass";

export default interface Player {
  id: string;
  playerName: string;
  characterName: string;
  classes: PlayerClass[];
  raceId: string;
  subRaceId?: string;
}