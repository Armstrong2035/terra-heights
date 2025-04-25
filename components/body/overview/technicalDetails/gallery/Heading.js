import typography from "@/utils/styles";
import { Stack, Typography, Box } from "@mui/material";
import { gallery } from "@/utils/siteConfig";
import typographyStyles from "@/app/styles";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Typography sx={{...typographyStyles.bodyMedium, fontSize: "20px"}}> (02)</Typography>

      <Stack spacing={1}>
        <Typography sx={{...typographyStyles.bodyMedium, fontSize: "20px"}}>{gallery.title}</Typography>
        <Typography sx={{...typographyStyles.bodyMedium, fontSize: "28px", fontWeight: 500}}>{gallery.subtitle}</Typography>
      </Stack>
    </Stack>
  );
}
