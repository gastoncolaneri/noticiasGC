import { makeStyles } from '@mui/styles';
import colors from '../../utils/colors';

export const generalStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: colors.COLOR_PRINCIPAL,
    height: '100%',
    paddingTop: '17vh',
    paddingBottom: '17vh',
  },
  contactCard: {
    padding: 20,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.GREY_BOX_SHADOW,
    boxShadow: '3px 5px 5px #9E9E9E',
    backgroundColor: colors.LIGHTGREY,
  },
}));
