import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import translations from "../translations";

interface Props {
  targetTitle: string;
  onDelete: () => void;
}

const DeleteDialog: React.FC<Props> = ({
  targetTitle = "",
  onDelete = () => {},
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="text"
        size="small"
        startIcon={<DeleteIcon />}
        color={"error"}
        onClick={handleClickOpen}
      >
        <Typography display={{ xs: "none", sm: "unset" }} fontSize="small">
          {translations.delete}
        </Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            p: 5,
            backgroundColor: "secondary.dark",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6">{translations.areYouSure}</Typography>
            <Typography variant={"body1"}>
              {translations.confirmMessagePart1} {targetTitle}{" "}
              {translations.confirmMessagePart2}
            </Typography>
          </Box>

          <TextField
            fullWidth
            required
            id="confirm-deletion"
            label={translations.confirm}
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <DialogActions>
            <Button size="small" variant="outlined" onClick={handleClose}>
              {translations.cancel}
            </Button>
            <Button
              variant="contained"
              size="small"
              type="submit"
              onClick={onDelete}
              disabled={inputValue !== translations.confirm}
            >
              {translations.delete}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
