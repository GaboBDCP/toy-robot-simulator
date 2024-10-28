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
  let { positionX, positionY, direction } = position;

  switch (direction) {
    case 'NORTH':
      positionX = Math.max(0, positionX - 1); // Mueve hacia el norte si no está en el borde superior
      break;
    case 'EAST':
      positionY = Math.min(gridSize - 1, positionY + 1); // Mueve hacia el este si no está en el borde derecho
      break;
    case 'SOUTH':
      positionX = Math.min(gridSize - 1, positionX + 1); // Mueve hacia el sur si no está en el borde inferior
      break;
    case 'WEST':
      positionY = Math.max(0, positionY - 1); // Mueve hacia el oeste si no está en el borde izquierdo
      break;
  }

  return { positionX, positionY, direction };
};

const commandProcess = (commandList: Commands[], tableTopSize: number) => {
  console.log('commands', commandList);
  console.log('tableTopSize', tableTopSize);

  // Posición inicial del Rover
  let position: RobotProps = { positionX: 0, positionY: 0, direction: 'NORTH' };

  // Procesa cada comando
  commandList.forEach((command) => {
    if (command === 'LEFT') {
      position.direction = rotateLeft(position.direction);
    } else if (command === 'RIGHT') {
      position.direction = rotateRight(position.direction);
    } else if (command === 'MOVE') {
      position = moveForward(position, tableTopSize);
    }
  });

  console.log('position', position);

  return position; // Retorna la posición final
};

export default commandProcess;
