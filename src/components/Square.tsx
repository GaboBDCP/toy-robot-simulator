import { Box, Typography } from '@mui/material';
import { Direction } from '../types';
import Robot from './Robot';

export interface SquareProps {
  x: number;
  y: number;
  direction?: Direction | null;
  isActive?: boolean;
  borders?: Direction[] | null;
}

const Square = ({ x, y, isActive, direction }: SquareProps) => {
  const getBorderStyle = (direction?: Direction) => {
    switch (direction) {
      case 'north':
        return { borderTop: '5px solid red' };
      case 'south':
        return { borderBottom: '5px solid red' };
      case 'east':
        return { borderRight: '5px solid red' };
      case 'west':
        return { borderLeft: '5px solid red' };
      default:
        return {};
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '7vh', sm: '8vh', md: '10vh' },
        height: { xs: '7vh', sm: '8vh', md: '10vh' },
        borderRadius: 1,
        bgcolor: 'primary.main',
        '&:hover': {
          bgcolor: 'primary.dark',
        },

        // borderBottom: '5px solid red',
        ...getBorderStyle(direction ?? undefined),
      }}
    >
      {isActive ? (
        <Robot direction={'north'} positionX={x} positionY={y} />
      ) : (
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`${x}, ${y}`}
        </Typography>
      )}
    </Box>
  );
};

export default Square;
