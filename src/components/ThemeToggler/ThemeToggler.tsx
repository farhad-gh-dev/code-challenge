import React, { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { AppThemeContext } from "contexts/StyleContext";

const toggleSize = "1.5rem";
const toggleRaySize = `calc(${toggleSize} * -0.4)`;
const toggleOffsetOrthogonal = `calc(${toggleSize} * 0.75)`;
const toggleOffsetDiagonal = `calc(${toggleSize} * 0.55)`;

const StyledToggler = styled(Box)(() => ({
  padding: "7px 9px",
  ".toggle": {
    appearance: "none",
    outline: "none",
    cursor: "pointer",
    width: toggleSize,
    height: toggleSize,
    boxShadow: `inset calc(${toggleSize} * 0.33) calc(${toggleSize} * -0.25) 0`,
    borderRadius: "999px",
    color: "hsl(240, 100%, 95%)",
    transition: "all 500ms",

    "&:checked": {
      transform: "scale(0.75)",
      color: "hsl(40, 100%, 50%)",
      boxShadow: `inset 0 0 0 ${toggleSize}, calc(${toggleOffsetOrthogonal} * -1) 0 0 ${toggleRaySize}, ${toggleOffsetOrthogonal} 0 0 ${toggleRaySize}, 0 calc(${toggleOffsetOrthogonal} * -1) 0 ${toggleRaySize}, 0 ${toggleOffsetOrthogonal} 0 ${toggleRaySize}, calc(${toggleOffsetDiagonal} * -1) calc(${toggleOffsetDiagonal} * -1) 0 ${toggleRaySize}, ${toggleOffsetDiagonal} ${toggleOffsetDiagonal} 0 ${toggleRaySize}, calc(${toggleOffsetDiagonal} * -1) ${toggleOffsetDiagonal} 0 ${toggleRaySize}, ${toggleOffsetDiagonal} calc(${toggleOffsetDiagonal} * -1) 0 ${toggleRaySize}`,
    },
  },
}));

const ThemeToggler: React.FC = () => {
  const { toggleThemeMode }: any = useContext(AppThemeContext);
  const isLightMode = useTheme().palette.mode === "light";

  return (
    <StyledToggler>
      <input
        id="toggle"
        className="toggle"
        type="checkbox"
        onChange={() => toggleThemeMode()}
        checked={isLightMode}
      />
      <div className="background"></div>
    </StyledToggler>
  );
};

export default ThemeToggler;
