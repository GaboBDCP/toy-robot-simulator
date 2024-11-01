import { Box, TextField } from '@mui/material';

interface HeaderProps {
  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
}

const Header: React.FC<HeaderProps> = ({
  width,
  height,
  setWidth,
  setHeight,
}) => {
  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(event.target.value));
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      component="form"
      noValidate
      autoComplete="off"
      p={2}
      color="primary"
    >
      <TextField
        label="Width"
        type="number"
        value={width}
        onChange={handleWidthChange}
        inputProps={{ min: 1, max: 20 }}
        variant="outlined"
        color="primary"
        margin="normal"
        size="small"
        sx={{ width: '80px', marginRight: '10px', marginBottom: '32px' }}
      />
      <TextField
        label="Height"
        type="number"
        value={height}
        onChange={handleHeightChange}
        inputProps={{ min: 1, max: 20 }}
        variant="outlined"
        color="primary"
        margin="normal"
        size="small"
        sx={{ width: '80px', marginRight: '10px', marginBottom: '32px' }}
      />
    </Box>
  );
};

export default Header;
