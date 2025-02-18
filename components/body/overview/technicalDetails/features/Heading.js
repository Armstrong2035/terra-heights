import typography from "@/utils/styles";
import { Stack, Box, Typography } from "@mui/material";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Typography sx={typography.medium16}> (04)</Typography>
      <Stack spacing={1}>
        <Typography sx={typography.medium16}>Features</Typography>
        <Typography sx={typography.regular28}>
          Finest Details and Luxurious Amenities
        </Typography>
      </Stack>
    </Stack>
  );
}
