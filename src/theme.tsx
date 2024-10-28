import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#6A9AB0',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#EAD8B1',
      secondary: '#6A9AB0',
    },
    common: {
      black: '#000000',
    },
    background: {
      default: '#001F3F',
    },
  },
});

export default theme;
