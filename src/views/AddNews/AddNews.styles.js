import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

export const generalStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: colors.COLOR_PRINCIPAL,
    height: "100%",
    flex: 1,
    alignItems: "center",
    display: "flex",
  },
  contactCard: {
    padding: 20,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.GREY_BOX_SHADOW,
    boxShadow: "3px 5px 5px #9E9E9E",
    backgroundColor: colors.LIGHTORANGE,
  },
}));
