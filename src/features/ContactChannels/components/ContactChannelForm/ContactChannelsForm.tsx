import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useContactChannelsForm } from "./useContactChannelForm";
import OptionsDropdown from "./OptionsDropdown";
import type { SubmitNewItemFunction } from "../../types";
import translations from "../../translations";

interface Props {
  isOpen?: boolean;
  dropDownActiveItem?: string;
  linkInputActiveValue?: string;
  clearFormStateOnClose?: boolean;
  onCloseBtnClick?: () => void;
  onSubmit?: SubmitNewItemFunction;
}

const ContactChannelsForm: React.FC<Props> = ({
  isOpen = false,
  dropDownActiveItem = "",
  linkInputActiveValue = "",
  clearFormStateOnClose = false,
  onCloseBtnClick = () => {},
  onSubmit = () => {},
}) => {
  const {
    dropdownOptions,
    dropdownValue,
    dropdownError,
    linkInputValue,
    linkInputError,
    canSubmit,
    handleDropdownValue,
    handleLinkInput,
    clearFormState,
  } = useContactChannelsForm(dropDownActiveItem, linkInputActiveValue);

  const handleCloseForm = () => {
    if (clearFormStateOnClose) {
      clearFormState();
    }
    onCloseBtnClick();
  };

  const handleSubmitForm = () => {
    const selectedContactChannel = dropdownValue ? dropdownValue : "";

    onSubmit(selectedContactChannel, linkInputValue);
    handleCloseForm();
  };

  return (
    <Collapse in={isOpen}>
      <Card
        sx={{
          mt: 2,
          p: 2,
          borderRadius: 4,
          boxShadow: "none",
          backgroundColor: "secondary.light",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Typography sx={{ mb: 2, fontSize: "small" }}>
            {translations.addContactChannels}
          </Typography>

          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={1}>
              {/* Dropdown */}
              <Grid item xs={12} sm={4}>
                <OptionsDropdown
                  dropdownOptions={dropdownOptions}
                  dropdownValue={dropdownValue}
                  handleDropdownValue={handleDropdownValue}
                  dropdownError={dropdownError}
                />
              </Grid>

              {/* Link input */}
              <Grid item xs={12} sm={8}>
                <Box marginY={{ xs: 2, sm: 0 }}>
                  <TextField
                    fullWidth
                    dir="ltr"
                    id="outlined-basic"
                    label={translations.link}
                    variant="outlined"
                    value={linkInputValue}
                    onChange={handleLinkInput}
                    error={linkInputError !== ""}
                    helperText={linkInputError}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>

        <CardActions sx={{ justifyContent: "end", mt: 2, padding: 0, gap: 1 }}>
          <Button size="small" variant="outlined" onClick={handleCloseForm}>
            {translations.cancel}
          </Button>
          <Button
            variant="contained"
            size="small"
            type="submit"
            disabled={!canSubmit}
            onClick={handleSubmitForm}
          >
            {translations.recordContactChannel}
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
};

export default ContactChannelsForm;
