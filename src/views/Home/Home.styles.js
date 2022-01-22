import { makeStyles } from '@mui/styles';
import colors from '../../utils/colors';

export const generalStyles = makeStyles((theme) => ({
  banner: {
    width: '100%',
  },
  container: {
    backgroundColor: colors.COLOR_PRINCIPAL,
    height: '100%',
    padding: 25,
  },
  card: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.GREY_BOX_SHADOW,
    padding: 15,
    boxShadow: '1px 2px 2px #9E9E9E',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
}));
