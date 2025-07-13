// src/theme.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Example primary color for light mode
    },
    secondary: {
      main: '#dc004e', // Example secondary color for light mode
    },
    // Add other palette customizations for light mode
  },
  // Add other theme customizations like typography, components, etc.
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Example primary color for dark mode
    },
    secondary: {
      main: '#f48fb1', // Example secondary color for dark mode
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e',   // Darker background for Paper components
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#b0b0b0', // Lighter grey text
    },
    // Add other palette customizations for dark mode
  },
  // Add other theme customizations like typography, components, etc.
});