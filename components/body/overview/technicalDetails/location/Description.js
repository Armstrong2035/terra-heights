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
import typographyStyles from "@/app/styles";

export default function Description() {
  return (
    <Stack spacing={10} sx={{ height: "100%" }}>
      <Stack spacing={3}>
        <Typography sx={{...typographyStyles.bodyMedium, fontSize: "20px"}}>{location.description}</Typography>

        <List>
          {location.proximities.map((item, index) => (
            <ListItem key={index}>
              <Typography sx={{...typographyStyles.bodyMedium, fontSize: "16px"}}>{item}</Typography>
            </ListItem>
          ))}
        </List>

        <Typography sx={{ ...typographyStyles.bodyMedium, fontSize: "20px" }}>
          {location.additionalInfo}
        </Typography>
      </Stack>

      <Typography sx={{...typographyStyles.bodyMedium, fontSize: "18px"}}>
        {location.startingPrice}
      </Typography>
    </Stack>
  );
}
