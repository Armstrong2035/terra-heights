import typography from "@/utils/styles";
import { Stack, Box, Typography } from "@mui/material";
import { features } from "@/utils/siteConfig";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Typography sx={typography.medium16}> (04)</Typography>
      <Stack spacing={1}>
        <Typography sx={typography.medium16}>{features.title}</Typography>
        <Typography sx={typography.regular28}>{features.subtitle}</Typography>
      </Stack>
    </Stack>
  );
}
