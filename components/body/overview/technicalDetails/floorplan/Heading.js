import { Stack, Box, Typography } from "@mui/material";
import typography from "@/utils/styles";
import { floorPlans } from "@/utils/siteConfig";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Typography sx={typography.medium16}> (03)</Typography>
      <Stack>
        <Typography>{floorPlans.title}</Typography>
        <Typography sx={typography.regular28}>{floorPlans.subtitle}</Typography>
      </Stack>
    </Stack>
  );
}
