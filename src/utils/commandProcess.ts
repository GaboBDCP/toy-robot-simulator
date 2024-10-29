import { Direction, RobotProps } from '../types';
import { Commands } from '../types/Commands';

const rotateLeft = (direction: Direction): Direction => {
  const directions: Record<Direction, Direction> = {
    NORTH: 'WEST',
    WEST: 'SOUTH',
    SOUTH: 'EAST',
    EAST: 'NORTH',
  };
  return directions[direction];
};

const rotateRight = (direction: Direction): Direction => {
  const directions: Record<Direction, Direction> = {
    NORTH: 'EAST',
    EAST: 'SOUTH',
    SOUTH: 'WEST',
    WEST: 'NORTH',
  };
  return directions[direction];
};

const moveForward = (position: RobotProps, gridSize: number): RobotProps => {
  console.log('gridSize', gridSize);

  let { positionX, positionY, direction } = position;

  switch (direction) {
    case 'NORTH':
      positionY = Math.min(gridSize - 1, positionY + 1);
      break;
    case 'EAST':
      positionX = Math.min(gridSize - 1, positionX + 1);
      break;
    case 'SOUTH':
      positionY = Math.max(0, positionY - 1);
      break;
    case 'WEST':
      positionX = Math.max(0, positionX - 1);
      break;
  }

  return { positionX, positionY, direction };
};

const parcePosition = (command: string): RobotProps => {
  const x = parseInt(command.split(',')[0].split(' ')[1]);
  const y = parseInt(command.split(',')[1]);
  const direction: Direction = command.split(',')[2] as Direction;
  return { positionX: x, positionY: y, direction };
};

const commandProcess = (commandList: Commands[], tableTopSize: number) => {
  const x = parcePosition(commandList[0]).positionX;
  const y = parcePosition(commandList[0]).positionY;
  const direction: Direction = parcePosition(commandList[0]).direction;
  let position: RobotProps = {
    positionX: x,
    positionY: y,
    direction: direction,
  };

  commandList.forEach((command) => {
    if (command === 'LEFT') {
      position.direction = rotateLeft(position.direction);
    } else if (command === 'RIGHT') {
      position.direction = rotateRight(position.direction);
    } else if (command === 'MOVE') {
      position = moveForward(position, tableTopSize);
    }
  });

  return position;
};

export default commandProcess;
