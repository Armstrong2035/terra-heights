import typography from "@/utils/styles";
import { Stack, Box, Typography } from "@mui/material";
import { features } from "@/utils/siteConfig";
import typographyStyles from "@/app/styles";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Typography sx={{...typographyStyles.bodyMedium, fontSize: "20px"}}> (04)</Typography>
      <Stack spacing={1}>
        <Typography sx={{...typographyStyles.bodyMedium, fontSize: "20px"}}>{features.title}</Typography>
        <Typography sx={{...typographyStyles.bodyMedium, fontSize: "28px", fontWeight: 500}}>{features.subtitle}</Typography>
      </Stack>
    </Stack>
  );
}
