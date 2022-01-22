import { makeStyles } from '@mui/styles';
import colors from '../../utils/colors';

export const generalStyles = makeStyles((theme) => ({
  grid: {
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  containerFooter: {
    width: '100%',
    backgroundColor: colors.COLOR_SECUNDARIO,
    padding: 40,
    bottom: 0,
  },
}));
