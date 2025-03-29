import typography from "@/utils/styles";
import { Stack, Typography, Box } from "@mui/material";
import { gallery } from "@/utils/siteConfig";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Typography sx={typography.medium16}> (02)</Typography>

      <Stack spacing={1}>
        <Typography sx={typography.medium16}>{gallery.title}</Typography>
        <Typography sx={typography.regular28}>{gallery.subtitle}</Typography>
      </Stack>
    </Stack>
  );
}
