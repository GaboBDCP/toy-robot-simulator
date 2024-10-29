import { describe, expect, it } from 'vitest';
import commandProcess from '../utils/commandProcess';

describe('commandProcess', () => {
  it('should process PLACE command correctly', () => {
    const result = commandProcess(['PLACE 0,0,NORTH'], 5, 5);
    expect(result).toStrictEqual({
      positionX: 0,
      positionY: 0,
      direction: 'NORTH',
    });
  });

  it('should process MOVE command correctly', () => {
    const result = commandProcess(['PLACE 0,0,NORTH', 'MOVE'], 5, 5);

    expect(result).toStrictEqual({
      positionX: 0,
      positionY: 1,
      direction: 'NORTH',
    });
  });

  it('should NOT process MOVE command correctly in the edge', () => {
    const result = commandProcess(['PLACE 0,4,NORTH', 'MOVE'], 5, 5);
    expect(result).toStrictEqual({
      positionX: 0,
      positionY: 4,
      direction: 'NORTH',
    });
  });

  it('should process LEFT command correctly', () => {
    const result = commandProcess(['PLACE 0,0,NORTH', 'LEFT'], 5, 5);
    expect(result).toStrictEqual({
      positionX: 0,
      positionY: 0,
      direction: 'WEST',
    });
  });

  it('should process RIGHT command correctly', () => {
    const result = commandProcess(['PLACE 0,0,NORTH', 'RIGHT'], 5, 5);
    expect(result).toStrictEqual({
      positionX: 0,
      positionY: 0,
      direction: 'EAST',
    });
  });

  it('should process REPORT command correctly', () => {
    const result = commandProcess(['PLACE 0,0,NORTH', 'REPORT'], 5, 5);
    expect(result).toStrictEqual({
      positionX: 0,
      positionY: 0,
      direction: 'NORTH',
    });
  });

  it('should not move out of bounds', () => {
    const result = commandProcess(['PLACE 2,0,SOUTH', 'MOVE'], 5, 5);
    expect(result).toStrictEqual({
      positionX: 2,
      positionY: 0,
      direction: 'SOUTH',
    });
  });
  it('should not move out of bounds', () => {
    const result = commandProcess(['PLACE 0,0,SOUTH', 'MOVE'], 5, 5);
    expect(result).toStrictEqual({
      positionX: 0,
      positionY: 0,
      direction: 'SOUTH',
    });
  });

  it('should not move out of bounds', () => {
    const result = commandProcess(
      ['PLACE 1,2,EAST', 'MOVE', 'MOVE', 'LEFT', 'MOVE', 'REPORT'],
      5,
      5,
    );
    expect(result).toStrictEqual({
      positionX: 3,
      positionY: 3,
      direction: 'NORTH',
    });
  });

  it('should not move out of bounds', () => {
    const result = commandProcess(
      [
        'PLACE 3,3,EAST',
        'MOVE',
        'MOVE',
        'MOVE',
        'LEFT',
        'MOVE',
        'MOVE',
        'MOVE',
        'LEFT',
        'MOVE',
        'REPORT',
      ],
      5,
      5,
    );
    expect(result).toStrictEqual({
      positionX: 3,
      positionY: 4,
      direction: 'WEST',
    });
  });

  it('should not move out of WEST bounds', () => {
    const result = commandProcess(
      ['PLACE 2,2,NORTH', 'RIGHT', 'MOVE', 'MOVE', 'MOVE'],
      5,
      5,
    );

    console.log('result', result);
    expect(result).toStrictEqual({
      positionX: 4,
      positionY: 2,
      direction: 'EAST',
    });
  });
});
