import React from "react";
import { useRouter } from "next/router";
import { Container, Box, Typography, Button } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import translations from "./translations";

interface Props {
  children?: React.ReactNode;
}

const SiteLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const getPageTitle = () => {
    const pathnamesArray = router.pathname.split("/");
    const lastPathname = pathnamesArray[pathnamesArray.length - 1];

    if (lastPathname === "") return translations.home;
    return translations[lastPathname as keyof typeof translations];
  };

  const changePageLanguage = (targetLang: string) => {
    router.push(router.pathname, router.pathname, {
      locale: targetLang,
    });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Box sx={{ mt: 4, width: "100%" }}>
        {/* top bar */}
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography marginBottom={1} variant="h6">
              {getPageTitle()}
            </Typography>

            <Box>
              <Box display="flex" gap={2}>
                <Button
                  sx={{
                    color:
                      router.locale === "en" ? "primary" : "text.secondary",
                  }}
                  onClick={() => changePageLanguage("en")}
                >
                  ENGLISH
                </Button>
                <Button
                  sx={{
                    color:
                      router.locale === "fa" ? "primary" : "text.secondary",
                  }}
                  onClick={() => changePageLanguage("fa")}
                >
                  {translations.persian}
                </Button>
              </Box>
            </Box>
          </Box>

          <Breadcrumbs />
        </div>

        {children}
      </Box>
    </Container>
  );
};

export default SiteLayout;
