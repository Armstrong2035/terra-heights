import typography from "@/utils/styles";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { location } from "@/utils/siteConfig";

export default function Description() {
  return (
    <Stack spacing={10} sx={{ height: "100%" }}>
      <Stack spacing={3}>
        <Typography sx={typography.medium28}>{location.description}</Typography>

        <List>
          {location.proximities.map((item, index) => (
            <ListItem key={index}>
              <Typography sx={typography.regular16}>{item}</Typography>
            </ListItem>
          ))}
        </List>

        <Typography sx={{ ...typography.medium28, fontSize: "18px" }}>
          {location.additionalInfo}
        </Typography>
      </Stack>

      <Typography sx={typography.regular48}>
        {location.startingPrice}
      </Typography>
    </Stack>
  );
}
