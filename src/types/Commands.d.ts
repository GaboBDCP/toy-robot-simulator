import { Direction } from './Space';

export type Commands = Place | 'MOVE' | 'LEFT' | 'RIGHT' | 'REPORT';

export type Place = `PLACE ${number},${number},${Direction}`;
