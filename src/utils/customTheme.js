import { createTheme } from '@mui/material/styles';
import colors from './colors';
export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#000',
    },
    secondary: {
      main: colors.COLOR_SECUNDARIO,
    },
    components: {
      // Name of the component
      Menu: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            backgroundColor: '#000',
          },
        },
      },
    },
  },
});
