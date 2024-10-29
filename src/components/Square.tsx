import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { Direction, RobotProps } from '../types';
import Robot from './Robot';
import { useState } from 'react';

export interface SquareProps {
  robotPosition?: RobotProps;
  setRobotPosition?: (x: number, y: number, direction: Direction) => void;
  x: number;
  y: number;
  direction?: Direction | null;
  isActive?: boolean;
  borders?: Direction[] | null;
  place: RobotProps;
  setPlace: (place: RobotProps) => void;
}

const Square = ({
  x,
  y,
  isActive,
  direction,
  place,
  setPlace,

  setRobotPosition,
}: SquareProps) => {
  // const [place, setPlace] = useState<RobotProps>({
  //   positionX: 0,
  //   positionY: 0,
  //   direction: 'NORTH',
  // });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (x: number, y: number, direction: Direction) => {
    console.log('x', x, 'y', y, 'direction', direction);
    if (setRobotPosition) {
      setRobotPosition(x, y, direction);
      setPlace({ positionX: x, positionY: y, direction });
    }
    setAnchorEl(null);
  };

  const getBorderStyle = (direction?: Direction) => {
    switch (direction) {
      case 'NORTH':
        return { borderTop: '5px solid red' };
      case 'SOUTH':
        return { borderBottom: '5px solid red' };
      case 'EAST':
        return { borderRight: '5px solid red' };
      case 'WEST':
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
      <Button onClick={handleClick}>
        {isActive ? (
          <Robot
            direction={place.direction}
            positionX={place.positionX}
            positionY={place.positionY}
          />
        ) : (
          <Typography variant="body1" color="textPrimary" gutterBottom>
            {`${x}, ${y}`}
          </Typography>
        )}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(0, 0, 'NORTH')}
      >
        <MenuItem onClick={() => handleClose(x, y, 'NORTH')}>NORTH</MenuItem>
        <MenuItem onClick={() => handleClose(x, y, 'SOUTH')}>SOUTH</MenuItem>
        <MenuItem onClick={() => handleClose(x, y, 'EAST')}>EAST</MenuItem>
        <MenuItem onClick={() => handleClose(x, y, 'WEST')}>WEST</MenuItem>
      </Menu>
    </Box>
  );
};

export default Square;
