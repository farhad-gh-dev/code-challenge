import React, { useState } from "react";
import { Button, Grid, Typography, Link, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Icon } from "components/Icon";
import { ContactChannelsForm } from "./ContactChannelForm";
import DeleteDialog from "./DeleteDialog";
import type { ContactChannel } from "types/user";
import type { DeleteItemFunction, UpdateItemFunction } from "../types";
import translations from "../translations";

interface Props extends ContactChannel {
  onEdit?: UpdateItemFunction;
  onDelete?: DeleteItemFunction;
}

const ChannelItem: React.FC<Props> = ({
  id = "",
  name = "",
  link = "",
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormSubmit: UpdateItemFunction = (newName, newLink) => {
    onEdit(newName, newLink, id);
  };

  const handleDeleteItem = () => {
    onDelete(id);
  };

  return (
    <Grid
      container
      display="grid"
      gridTemplateColumns={{ xs: "1fr 32px", sm: "1fr 145px" }}
      gridTemplateAreas={{ xs: '"details actions" "form form"' }}
      sx={{
        mb: 2,
        p: 2,
        borderRadius: 4,
        backgroundColor: "secondary.main",
      }}
    >
      {/* Item information */}
      <Grid
        gap={1}
        container
        gridArea={"details / details / details / details"}
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "space-between", sm: "normal" }}
        alignItems={{ sm: "center" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Icon type={name} />
          <Typography>
            {translations[name as keyof typeof translations]}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="caption" sx={{ marginLeft: 1 }}>
            {translations.link}:
          </Typography>
          <Link href={link} sx={{ overflowWrap: "anywhere" }}>
            {link}
          </Link>
        </Box>
      </Grid>

      {/* Action buttons */}
      <Grid
        container
        gridArea={"actions / actions / actions / actions"}
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "space-between" }}
      >
        <Button
          variant="text"
          size="small"
          startIcon={<EditIcon />}
          onClick={() => setIsFormOpen(true)}
        >
          <Typography display={{ xs: "none", sm: "unset" }} fontSize="small">
            {translations.edit}
          </Typography>
        </Button>

        <DeleteDialog targetTitle={name} onDelete={handleDeleteItem} />
      </Grid>

      {/* Edit item form */}
      <Grid gridArea={"form / form / form / form"}>
        <ContactChannelsForm
          isOpen={isFormOpen}
          onCloseBtnClick={() => setIsFormOpen(false)}
          dropDownActiveItem={name}
          linkInputActiveValue={link}
          onSubmit={handleFormSubmit}
        />
      </Grid>
    </Grid>
  );
};

export default ChannelItem;
