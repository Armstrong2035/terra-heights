import { Typography, Box, Stack } from "@mui/material";
import { mdTypography, typographyStyles } from "@/utils/styles";
import { hero } from "@/utils/siteConfig";

export default function HeroText({ isDesktop }) {
  const style = {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "6.5rem", // 104px converted to rem
    lineHeight: "6.75rem", // 108px converted to rem
    color: "#000000", // hex version of rgb(0, 0, 0)
  };

  return (
    <Stack>
      {hero.title.map((line, index) => (
        <Typography key={index} sx={isDesktop ? style : mdTypography.heading48}>
          {line}
        </Typography>
      ))}
    </Stack>
  );
}
