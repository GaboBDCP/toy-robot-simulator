import { expect, test } from 'vitest';
import commandProcess from '../utils/commandProcess';
import { Commands } from '../types/Commands';

const commandList: Commands[] = ['PLACE 0,0,NORTH', 'REPORT'];

test('Place the robot in 0,0,NORTH', () => {
  expect(commandProcess(commandList, 5)).toStrictEqual({
    positionX: 0,
    positionY: 0,
    direction: 'NORTH',
  });
});
