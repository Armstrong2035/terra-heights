import { Stack, Box, Typography } from "@mui/material";
import typography from "@/utils/styles";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Typography sx={typography.medium16}> (03)</Typography>
      <Stack>
        <Typography>Floor Plans</Typography>
        <Typography sx={typography.regular28}>
          Choose from an exquisite selection of 1 to 4-bedroom residences, each
          offering a unique blend of luxury and comfort.
        </Typography>
      </Stack>
    </Stack>
  );
}
