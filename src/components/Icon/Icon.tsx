import React from "react";
import { IconProps } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";

type IconTypes =
  | "twitter"
  | "instagram"
  | "facebook"
  | "telegram"
  | "linkedin"
  | "website"
  | string;

interface Props extends IconProps {
  type?: IconTypes;
}

const Icon: React.FC<Props> = ({ type = "", ...props }) => {
  const RenderIcon: any = iconSelector(type);

  return <RenderIcon {...props} />;
};

const iconSelector = (type: IconTypes) => {
  switch (type) {
    case "twitter":
      return TwitterIcon;
    case "instagram":
      return InstagramIcon;
    case "facebook":
      return FacebookIcon;
    case "telegram":
      return TelegramIcon;
    case "linkedin":
      return LinkedInIcon;
    case "website":
      return PublicIcon;
    default:
      return null;
  }
};

export default Icon;
