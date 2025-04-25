import { Stack, Box, Typography } from "@mui/material";
import typography from "@/utils/styles";
import { floorPlans } from "@/utils/siteConfig";
import typographyStyles from "@/app/styles";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Typography sx={{...typographyStyles.bodyMedium, fontSize: "20px"}}> (03)</Typography>
      <Stack>
        <Typography>{floorPlans.title}</Typography>
        <Typography sx={{...typographyStyles.bodyMedium, fontSize: "28px", fontWeight: 500}}>{floorPlans.subtitle}</Typography>
      </Stack>
    </Stack>
  );
}
