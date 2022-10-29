import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { Icon } from "components/Icon";
import type { DropdownOnChangeFunction } from "../../types/index";
import translations from "../../translations";

interface Props {
  dropdownOptions: string[];
  dropdownValue: string | null;
  handleDropdownValue: DropdownOnChangeFunction;
  dropdownError: string;
}

const OptionsDropdown: React.FC<Props> = ({
  dropdownOptions,
  dropdownValue,
  handleDropdownValue,
  dropdownError,
}) => {
  return (
    <Autocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      options={dropdownOptions}
      value={dropdownValue}
      onChange={handleDropdownValue}
      getOptionLabel={(option) =>
        translations[option as keyof typeof translations]
      }
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Box>
            <Icon type={option} />
          </Box>
          <Box>{translations[option as keyof typeof translations]}</Box>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          error={dropdownError !== ""}
          helperText={dropdownError}
          label={translations.type}
          {...params}
        />
      )}
    />
  );
};

export default OptionsDropdown;
