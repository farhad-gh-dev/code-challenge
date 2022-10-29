export const checkLinkValidation = (s: string) => {
  const linkPattern =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  if (s.match(linkPattern)) return true;
  return false;
};
