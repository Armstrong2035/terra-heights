import { mdTypography } from "@/utils/styles";
import { Typography, Stack, Box, Button } from "@mui/material";
import { hero } from "@/utils/siteConfig";

export default function SubText1({ isDesktop }) {
  const scrollToForm = () => {
    const form = document.getElementById("sobha-one-element-contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };
  const style1 = {
    heading: {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "37px",
      color: "rgb(0, 0, 0)",
    },
    body: {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#525252",
    },
  };

  return (
    <Stack spacing={isDesktop ? 10 : 3} justifyContent={"center"}>
      <Box>
        <Typography sx={isDesktop ? style1.heading : mdTypography.heading32}>
          {hero.projectName}
        </Typography>
        <Typography sx={style1.body}>{hero.projectTypes}</Typography>
      </Box>

      <Box>
        <Typography sx={isDesktop ? style1.body : mdTypography.body16Gray}>
          {hero.description}
        </Typography>

        <Button
          variant="contained"
          onClick={scrollToForm}
          sx={{ backgroundColor: "#005244", mt: 3 }}
        >
          {hero.ctaText}
        </Button>
      </Box>
    </Stack>
  );
}
