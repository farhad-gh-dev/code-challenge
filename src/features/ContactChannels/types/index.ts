export type DropdownOnChangeFunction = (
  event: React.SyntheticEvent<Element, Event>,
  value: string | null
) => void;

export type SubmitNewItemFunction = (name?: string, link?: string) => void;

export type UpdateItemFunction = (
  name?: string,
  link?: string,
  id?: string
) => void;
