import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { Paper, Typography, Box } from "@mui/material";
import NewContactChannel from "./components/NewContactChannel";
import ChannelItem from "./components/ChannelItem";
import type { ContactChannel } from "types/user";
import type {
  SubmitNewItemFunction,
  UpdateItemFunction,
  DeleteItemFunction,
} from "./types";
import translations from "./translations";

interface Props {
  contactsData: ContactChannel[];
}

const ContactChannels: React.FC<Props> = ({ contactsData = [] }) => {
  const [contactChannels, setContactChannels] =
    useState<ContactChannel[]>(contactsData);

  const handleNewContactChannel: SubmitNewItemFunction = (
    name = "",
    link = ""
  ) => {
    const newItem = {
      id: uuidV4(),
      name,
      link,
    };
    setContactChannels((state) => [...state, newItem]);
  };

  const handleContactChannelUpdate: UpdateItemFunction = (name, link, id) => {
    const newContactChannels = [
      ...contactChannels.map((item) => {
        if (item.id == id) {
          if (name) item.name = name;
          if (link) item.link = link;
        }
        return item;
      }),
    ];

    setContactChannels(newContactChannels);
  };

  const handleDeleteItem: DeleteItemFunction = (id) => {
    setContactChannels((state) => state.filter((item) => item.id !== id));
  };

  return (
    <Paper
      sx={{
        mt: 6,
        p: 3,
        borderRadius: 4,
        backgroundColor: "secondary.dark",
        backgroundImage: "none",
      }}
    >
      <Typography sx={{ fontSize: "small", color: "text.secondary" }}>
        {translations.contactChannels}
      </Typography>

      <Box>
        <NewContactChannel onSubmit={handleNewContactChannel} />

        {/* user contact channels list */}
        <Box sx={{ mt: 2 }}>
          {contactChannels.map((item) => {
            return (
              <ChannelItem
                key={item.id}
                onEdit={handleContactChannelUpdate}
                onDelete={handleDeleteItem}
                {...item}
              />
            );
          })}
        </Box>
      </Box>
    </Paper>
  );
};

export default ContactChannels;
