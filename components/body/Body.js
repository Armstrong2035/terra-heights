"use client";
import Hero from "./hero/Hero";
import { Box, Divider, Stack, useMediaQuery, useTheme } from "@mui/material"; // Added useTheme here
import TechnicalDetails from "./overview/technicalDetails/TechnicalDetails";
import ContactForm from "../form/ContactForm";
import ClickUpForm from "../form/ClickupForm";
// Remove the separate useTheme import

export default function Body({
  images,
  heroImage,
  masterPlan,
  floorPlanImages,
}) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <Box sx={{ mt: 10, ml: 5, mr: 5 }}>
        <Hero isDesktop={isDesktop} heroImage={heroImage} />
        <TechnicalDetails
          isDesktop={isDesktop}
          images={images}
          masterPlan={masterPlan}
          floorPlanImages={floorPlanImages}
          heroImage={heroImage}
        />
        <ClickUpForm />
      </Box>
    </Stack>
  );
}
