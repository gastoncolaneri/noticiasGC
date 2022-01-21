import { makeStyles } from '@mui/styles';
import colors from '../../utils/colors';

export const generalStyles = makeStyles((theme) => ({
  banner: {
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: colors.COLOR_PRINCIPAL,
  },
  grid: {
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  containerFooter: {
    width: '100%',
    backgroundColor: colors.COLOR_SECUNDARIO,
    padding: 40,
  },
}));
