import typography from "@/utils/styles";
import { Stack, Typography, Box } from "@mui/material";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Typography sx={typography.medium16}> (02)</Typography>

      <Stack spacing={1}>
        <Typography sx={typography.medium16}>Gallery</Typography>

        <Typography sx={typography.regular28}>
          Detail and Sophistication in every element
        </Typography>
      </Stack>
    </Stack>
  );
}
