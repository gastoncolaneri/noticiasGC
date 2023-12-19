import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

export const generalStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.GREY_BOX_SHADOW,
    padding: 15,
    boxShadow: "3px 5px 5px #9E9E9E",
    backgroundColor: colors.LIGHTORANGE,
    marginBottom: "20px !important",
    width: "100%",
  },
  container: {
    width: "100%",
    backgroundColor: colors.COLOR_PRINCIPAL,
  },
}));
