import { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';

import Square, { SquareProps } from './Square';
import { Direction, RobotProps } from '../types';
import commandProcess from '../utils/commandProcess';
import { Commands } from '../types/Commands';

export interface TableTopProps {
  width: number;
  height: number;
}

const TableTop = ({ width, height }: TableTopProps) => {
  const [squares, setSquares] = useState<SquareProps[]>([]);
  const [robotPosition, setRobotPosition] = useState<RobotProps>({
    positionX: 0,
    positionY: 0,
    direction: 'NORTH' as Direction,
  });

  const [place, setPlace] = useState<RobotProps>({
    positionX: 0,
    positionY: 0,
    direction: 'NORTH',
  });

  const [commands, setCommands] = useState<Commands[]>([
    'PLACE 0,0,NORTH',
    'MOVE',
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('commands', commands);
    const result = commandProcess(commands, width * height);
    setRobotPosition({
      positionX: result.positionX,
      positionY: result.positionY,
      direction: result.direction,
    });
    setPlace({
      positionX: result.positionX,
      positionY: result.positionY,
      direction: result.direction,
    });
    console.log('result', result);
  };

  useEffect(() => {
    const initialSquares: SquareProps[] = [];
    for (let y = height - 1; y >= 0; y--) {
      for (let x = 0; x < width; x++) {
        initialSquares.push({
          x,
          y,
          isActive:
            robotPosition.positionX === x && robotPosition.positionY === y,
          direction:
            robotPosition.positionX === x && robotPosition.positionY === y
              ? robotPosition.direction
              : null,
          place: place,
          setPlace: setPlace,
        });
      }
    }
    setSquares(initialSquares);
  }, [width, height, robotPosition, commands]);

  const handleSetRobotPosition = (
    positionX: number,
    positionY: number,
    direction: Direction,
  ) => {
    setRobotPosition({ positionX, positionY, direction });
    setCommands(() => [`PLACE ${positionX},${positionY},${direction}`]);
  };

  const handleReset = () => {
    setCommands(() => ['PLACE 0,0,NORTH']);
    setRobotPosition(() => ({
      positionX: 0,
      positionY: 0,
      direction: 'NORTH',
    }));
    setPlace({ positionX: 0, positionY: 0, direction: 'NORTH' });
  };

  const rows = [];
  for (let y = height - 1; y >= 0; y--) {
    const columns = [];
    for (let x = 0; x < width; x++) {
      const square = squares.find(
        (sq) => sq.x === x && sq.y === y,
      ) as SquareProps;
      columns.push(
        <td key={`${y}-${x}`}>
          <Square
            x={square?.isActive ? robotPosition.positionX : x}
            y={square?.isActive ? robotPosition.positionY : y}
            isActive={square?.isActive}
            direction={square?.direction}
            setRobotPosition={handleSetRobotPosition}
            place={place}
            setPlace={setPlace}
          />
        </td>,
      );
    }
    rows.push(<tr key={y}>{columns}</tr>);
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        overflow="auto"
        sx={{ padding: { xs: '0', sm: '0', md: '2' } }}
      >
        <Box
          display="flex"
          justifyContent="flex-start"
          overflow="auto"
          sx={{
            padding: { xs: '0', sm: '0', md: '2' },
          }}
        >
          <table
            border={1}
            style={{ borderCollapse: 'collapse', border: 'solid' }}
          >
            <tbody>{rows}</tbody>
          </table>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        overflow="auto"
        sx={{ padding: { xs: '0', sm: '0', md: '2' } }}
      >
        <Button
          onClick={() =>
            setCommands((prevCommands) => [...prevCommands, 'LEFT' as Commands])
          }
        >
          LEFT
        </Button>
        <Button
          onClick={() =>
            setCommands((prevCommands) => [
              ...prevCommands,
              'RIGHT' as Commands,
            ])
          }
        >
          RIGHT
        </Button>
        <Button
          onClick={() =>
            setCommands((prevCommands) => [...prevCommands, 'MOVE' as Commands])
          }
        >
          MOVE
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginRight: '10px', marginBottom: '18px' }}
          onClick={handleSubmit}
        >
          Run
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: '10px', marginBottom: '18px' }}
          onClick={handleReset}
        >
          RESET
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        overflow="auto"
        sx={{ padding: { xs: '0', sm: '0', md: '2' } }}
      >
        <TextField
          label="Commands"
          type="text"
          variant="outlined"
          color="primary"
          value={commands}
          margin="normal"
          size="small"
          fullWidth
          sx={{ marginRight: '10px', maxWidth: '80vh' }}
        />
      </Box>
    </>
  );
};

export default TableTop;
