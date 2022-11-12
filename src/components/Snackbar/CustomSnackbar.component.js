import { Alert, Snackbar } from "@mui/material";

const CustomSnackbar = ({
  isOpen,
  setIsOpen,
  typeAlert,
  messageAlert,
  hideTime = 2000,
}) => {
  const onClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(!isOpen);
  };
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={hideTime}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert onClose={onClose} severity={typeAlert} sx={{ width: "100%" }}>
        {messageAlert}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
