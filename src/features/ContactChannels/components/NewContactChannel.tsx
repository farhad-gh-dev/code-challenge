import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ContactChannelsForm } from "./ContactChannelForm";
import type { SubmitNewItemFunction } from "../types";
import translations from "../translations";

interface Props {
  onSubmit?: SubmitNewItemFunction;
}

const NewContactChannel: React.FC<Props> = ({ onSubmit = () => {} }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Button
        disabled={isFormOpen}
        size="small"
        sx={{ mt: 2 }}
        startIcon={<AddIcon />}
        onClick={() => setIsFormOpen(true)}
      >
        {translations.addContactChannels}
      </Button>

      <ContactChannelsForm
        onSubmit={onSubmit}
        isOpen={isFormOpen}
        onCloseBtnClick={() => setIsFormOpen(false)}
        clearFormStateOnClose={true}
      />
    </>
  );
};

export default NewContactChannel;
