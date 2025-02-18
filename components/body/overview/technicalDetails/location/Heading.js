import { Typography, Stack, Box } from "@mui/material";
import typography from "@/utils/styles";

export default function Heading() {
  return (
    <Stack
      direction="row"
      spacing={4}
      alignItems={"center"}
      // justifyContent={"center"}
    >
      <Typography sx={typography.medium16}>(01)</Typography>
      <Box>
        <Typography sx={typography.regular28}>Location</Typography>
        <Typography sx={typography.regular16}>
          Plug in and plug out when you like, (how you like)
        </Typography>
      </Box>
    </Stack>
  );
}
