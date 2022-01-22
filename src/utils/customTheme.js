import { createTheme } from '@mui/material/styles';
import colors from './colors';
export const customTheme = createTheme({
  palette: {
    primary: {
      main: colors.COLOR_PRINCIPAL,
    },
    secondary: {
      main: colors.COLOR_SECUNDARIO,
    },
  },
});
