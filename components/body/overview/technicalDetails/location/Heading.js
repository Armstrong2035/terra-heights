import { Typography, Stack, Box } from "@mui/material";
import typography from "@/utils/styles";
import { location } from "@/utils/siteConfig";

export default function Heading() {
  return (
    <Stack direction="row" spacing={4} alignItems={"center"}>
      <Typography sx={typography.medium16}>(01)</Typography>
      <Box>
        <Typography sx={typography.regular28}>{location.title}</Typography>
        <Typography sx={typography.regular16}>{location.subtitle}</Typography>
      </Box>
    </Stack>
  );
}
