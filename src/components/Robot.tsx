import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Box, Typography } from '@mui/material';
import { RobotProps } from '../types';

const Robot = (props: RobotProps) => {
  const { positionX, positionY } = props;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
          maxHeight: { xs: '2vh', sm: '8vh', md: '10vh' },
          borderRadius: 1,
          bgcolor: 'white',
          '&:hover': {
            bgcolor: 'grey',
          },
        }}
      >
        <SmartToyIcon color="secondary" fontSize="inherit" />
        <Box>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {`${positionX}, ${positionY}`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Robot;
