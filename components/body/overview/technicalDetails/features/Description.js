import { Box, Grid, Typography, Paper } from "@mui/material";
import {
  SportsGolf,
  Pool,
  FitnessCenter,
  Laptop,
  Theaters,
  Park,
  SelfImprovement,
  Pets,
  Restaurant,
} from "@mui/icons-material";
import { features } from "@/utils/siteConfig";

// Map of icon names to their components
const iconMap = {
  SportsGolf: <SportsGolf sx={{ fontSize: 40 }} />,
  Pool: <Pool sx={{ fontSize: 40 }} />,
  FitnessCenter: <FitnessCenter sx={{ fontSize: 40 }} />,
  Laptop: <Laptop sx={{ fontSize: 40 }} />,
  Theaters: <Theaters sx={{ fontSize: 40 }} />,
  Park: <Park sx={{ fontSize: 40 }} />,
  SelfImprovement: <SelfImprovement sx={{ fontSize: 40 }} />,
  Pets: <Pets sx={{ fontSize: 40 }} />,
  Restaurant: <Restaurant sx={{ fontSize: 40 }} />,
};

export default function FeaturesList() {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 6,
          color: "#005244",
          fontWeight: 500,
        }}
      >
        {features.amenitiesTitle}
      </Typography>

      <Grid container spacing={4}>
        {features.amenities.map((amenity, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                backgroundColor: "transparent",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  color: "#1C6658",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                {iconMap[amenity.iconName]}
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {amenity.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
