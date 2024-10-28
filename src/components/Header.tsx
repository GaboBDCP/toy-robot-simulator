import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

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
  const [commands, setCommands] = useState('');

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(event.target.value));
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('commands', commands);
    setCommands('');
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
      onSubmit={handleSubmit}
    >
      <TextField
        label="Width"
        type="number"
        value={width}
        onChange={handleWidthChange}
        variant="outlined"
        color="primary"
      />
      <TextField
        label="Height"
        type="number"
        value={height}
        onChange={handleHeightChange}
        variant="outlined"
        color="primary"
      />
      <TextField
        label="Commands"
        type="text"
        variant="outlined"
        color="primary"
        value={commands}
        onChange={(e) => setCommands(e.target.value)}
        placeholder="Ejemplo: LMLMRM"
        helperText="L = Turn Left, R = Turn right, M = Move forward"
      />
      <Button type="submit" variant="contained" color="primary">
        Run
      </Button>
    </Box>
  );
};

export default Header;
