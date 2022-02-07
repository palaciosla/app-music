import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function ErrorMessage({ errors, search, setErrors }) {
  const [open, setOpen] = React.useState(errors ? true : false);

  let navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
          color="error"
        >
          Hay un error <ThumbDownOffAltIcon />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            No pudimos encontrar la cancion{" "}
            <span style={{ textTransform: "capitalize" }}>"{search.song}"</span>{" "}
            de{" "}
            <span style={{ textTransform: "capitalize" }}>{search.artist}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              navigate("/");
              setErrors(null);
            }}
            autoFocus
            color="secondary"
          >
            Volver a Buscar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ErrorMessage;
