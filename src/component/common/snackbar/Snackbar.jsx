import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../../../redux/slices/snackbarSlice";

const CommonSnackbar = () => {
  const dispatch = useDispatch();

  const snackbarState = useSelector((state) => state.snackbar);

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{ boxShadow: "1px 5px 5px rgba(0, 0, 0, 0.09)" }}
      open={snackbarState.open}
      onClose={() => {
        handleClose();
      }}
      autoHideDuration={4000}
    >
      <Alert
        onClose={() => {
          handleClose();
        }}
        severity={snackbarState.type}
        sx={{ backgroundColor: "#F6FFED" }}
      >
        <Typography
          mb={1}
          variant="body2"
          sx={{ color: "#262626" }}
          fontWeight={500}
        >
          {snackbarState.heading}
        </Typography>
        {snackbarState.message ? snackbarState.message : null}
      </Alert>
    </Snackbar>
  );
};

export default CommonSnackbar;
