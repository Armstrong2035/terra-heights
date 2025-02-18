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

export default function FeaturesList() {
  const amenities = [
    {
      icon: <SportsGolf sx={{ fontSize: 40 }} />,
      title: "18-HOLE PITCH & PUTT GOLF COURSE",
    },
    {
      icon: <Pool sx={{ fontSize: 40 }} />,
      title: "INFINITY-EDGE SWIMMING POOLS",
    },
    {
      icon: <FitnessCenter sx={{ fontSize: 40 }} />,
      title: "OUTDOOR & INDOOR FITNESS CENTERS",
    },
    {
      icon: <Laptop sx={{ fontSize: 40 }} />,
      title: "CO-WORKING SPACES & BUSINESS LOUNGE",
    },
    {
      icon: <Theaters sx={{ fontSize: 40 }} />,
      title: "PRIVATE CINEMA & VR GAMING ZONE",
    },
    {
      icon: <Park sx={{ fontSize: 40 }} />,
      title: "KIDS' PLAY AREAS & FAMILY PARKS",
    },
    {
      icon: <SelfImprovement sx={{ fontSize: 40 }} />,
      title: "YOGA, MEDITATION & WELLNESS SPACES",
    },
    {
      icon: <Pets sx={{ fontSize: 40 }} />,
      title: "PET-FRIENDLY ZONES & LANDSCAPED GARDENS",
    },
    {
      icon: <Restaurant sx={{ fontSize: 40 }} />,
      title: "RETAIL & DINING PROMENADE BY THE WATER",
    },
  ];

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
        EXCLUSIVE AMENITIES
      </Typography>

      <Grid container spacing={4}>
        {amenities.map((amenity, index) => (
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
                {amenity.icon}
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
