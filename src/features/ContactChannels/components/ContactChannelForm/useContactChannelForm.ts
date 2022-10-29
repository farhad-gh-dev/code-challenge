import React, { useState } from "react";
import { checkLinkValidation } from "../../services/formValidators";
import { getContactChannelsOptions } from "../../api";
import type { DropdownOnChangeFunction } from "../../types";
import translations from "../../translations";

export const useContactChannelsForm = (
  dropDownActiveItem: string,
  linkInputActiveValue: string
) => {
  const dropdownOptions = getContactChannelsOptions();

  const [dropdownValue, setDropdownValue] = useState<string | null>(
    dropDownActiveItem ? dropDownActiveItem : null
  );
  const [dropdownError, setDropdownError] = useState("");
  const [linkInputValue, setLinkInputValue] = useState(linkInputActiveValue);
  const [linkInputError, setLinkInputError] = useState("");

  const handleLinkInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    setLinkInputValue(inputValue);

    if (!dropdownValue) {
      setDropdownError(translations.ThisFieldIsRequired);
    }

    if (!inputValue) {
      setLinkInputError(translations.ThisFieldIsRequired);
      return;
    }

    const isLinkValid = checkLinkValidation(inputValue);
    if (!isLinkValid) {
      setLinkInputError(translations.ThisFieldContentShouldBeALink);
      return;
    }

    setLinkInputError("");
  };

  const handleDropdownValue: DropdownOnChangeFunction = (event, value) => {
    setDropdownValue(value);
    setDropdownError("");
  };

  const clearFormState = () => {
    setDropdownValue(null);
    setDropdownError("");
    setLinkInputValue("");
    setLinkInputError("");
  };

  const canSubmit =
    linkInputValue !== "" &&
    dropdownValue !== null &&
    linkInputError === "" &&
    dropdownError === "" &&
    (linkInputActiveValue !== linkInputValue ||
      dropDownActiveItem !== dropdownValue);

  return {
    dropdownOptions,
    dropdownValue,
    dropdownError,
    linkInputValue,
    linkInputError,
    canSubmit,
    handleLinkInput,
    handleDropdownValue,
    clearFormState,
  };
};
