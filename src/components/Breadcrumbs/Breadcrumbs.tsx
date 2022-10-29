import React from "react";
import { useRouter } from "next/router";
import { Typography, Link, Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import translations from "./translations";

interface CrumbProps {
  text?: string;
  href?: string;
  last?: boolean;
}

const Crumb: React.FC<CrumbProps> = ({
  text = "",
  href = "",
  last = false,
}) => {
  if (last) {
    return (
      <Typography color="inherit">
        {translations[text as keyof typeof translations]}
      </Typography>
    );
  }

  return (
    <Link color="inherit" href={href}>
      {translations[text as keyof typeof translations]}
    </Link>
  );
};

const Breadcrumbs: React.FC = () => {
  const router = useRouter();

  function generateBreadcrumbs() {
    const pathnameRoutesArray = router.pathname
      .split("/")
      .filter((v) => v.length > 0);

    const crumblist = pathnameRoutesArray.map((subpath, index) => {
      // Create an accurate link for each item route by joining the previous ones
      const href = "/" + pathnameRoutesArray.slice(0, index + 1).join("/");

      const text = subpath;
      return { href, text };
    });

    return [{ href: "/", text: "home" }, ...crumblist];
  }

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length < 2) return null;
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      separator={<CircleIcon fontSize="inherit" />}
      sx={{ textColor: "text.secondary" }}
    >
      {breadcrumbs.map((crumb, index) => (
        <Crumb {...crumb} key={index} last={index === breadcrumbs.length - 1} />
      ))}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
