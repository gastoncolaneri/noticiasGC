import { makeStyles } from '@mui/styles';
import colors from '../../utils/colors';

export const generalStyles = makeStyles((theme) => ({
  banner: {
    width: '100%',
  },
  container: {
    backgroundColor: colors.COLOR_PRINCIPAL,
    height: '100%',
  },
}));
