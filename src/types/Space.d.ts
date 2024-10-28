export interface Coordinates {
  x: number;
  y: number;
}

export type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';

export interface RobotProps {
  positionX: number;
  positionY: number;
  direction: Direction;
}
