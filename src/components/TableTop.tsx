import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

// type Direction = 'north' | 'south' | 'east' | 'west';
import Square, { SquareProps } from './Square'; // Assuming Square is another component
import { Direction } from '../types';

export interface TableTopProps {
  width: number;
  height: number;
}

const TableTop = ({ width, height }: TableTopProps) => {
  const [squares, setSquares] = useState<SquareProps[]>([]);

  useEffect(() => {
    const initialSquares: SquareProps[] = [];
    for (let y = height - 1; y >= 0; y--) {
      for (let x = 0; x < width; x++) {
        initialSquares.push({
          x,
          y,
          isActive: x === 0 && y === 0,
          direction: x === 0 && y === 0 ? 'NORTH' : null,
        });
      }
    }
    setSquares(initialSquares);
  }, [width, height]);

  const updateRobotPosition = (
    newX: number,
    newY: number,
    newDirection: Direction,
  ) => {
    setSquares((prevSquares) =>
      prevSquares.map((square) =>
        square.x === newX && square.y === newY
          ? { ...square, isActive: true, direction: newDirection }
          : { ...square, isActive: false, direction: null },
      ),
    );
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
            x={x}
            y={y}
            isActive={square?.isActive}
            direction={square?.direction}
          />
        </td>,
      );
    }
    rows.push(<tr key={y}>{columns}</tr>);
  }

  return (
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
      <Button onClick={() => updateRobotPosition(2, 2, 'WEST' as Direction)}>
        UPDATE TO 2/2
      </Button>
    </Box>
  );
};

export default TableTop;
