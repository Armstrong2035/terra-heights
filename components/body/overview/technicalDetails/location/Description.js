import typography from "@/utils/styles";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Stack,
} from "@mui/material";

export default function Description() {
  const locations = [
    "5 Minutes – Dubai Creek Harbour",
    "10 Minutes – Downtown Dubai & Business Bay",
    "15 Minutes – Dubai International Airport",
    "20 Minutes – Dubai Marina & The Palm Jumeirah",
  ];

  return (
    <Stack spacing={10} sx={{ height: "100%" }}>
      <Stack spacing={3}>
        <Typography sx={typography.medium28}>
          Strategically positioned within Sobha One, The Element ensures
          seamless connectivity while offering a serene retreat from the city’s
          hustle. It’s like being a double agent
        </Typography>

        <List>
          {locations.map((location, index) => (
            <ListItem key={index}>
              <Typography sx={typography.regular16}>{location}</Typography>
            </ListItem>
          ))}
        </List>

        <Typography sx={{ ...typography.medium28, fontSize: "18px" }}>
          Embrace the perfect balance of accessibility and exclusivity. Nestled
          within the twin interchanges on Ras Al Khor Road, this is a haven
          touched by the essence of the elements.
        </Typography>
      </Stack>

      <Typography sx={typography.regular48}>
        Starting Price: AED 1.49M
      </Typography>
    </Stack>
  );
}
