import { Box, Divider, Stack } from "@mui/material";
import Location from "./location/Location";
import Gallery from "./gallery/Gallery";
import FloorPlan from "./floorplan/FloorPlan";
import Features from "./features/Features";
export default function TechnicalDetails({
  isDesktop,
  images,
  masterPlan,
  floorPlanImages,
  heroImage,
}) {
  const dividerMargins = {
    mt: isDesktop ? 20 : 10,
    mb: isDesktop ? 20 : 10,
  };
  return (
    <Box>
      <Location masterPlan={masterPlan} />
      <Divider sx={dividerMargins} />
      <Gallery isDesktop={isDesktop} images={images} />
      <Divider sx={dividerMargins} />
      <FloorPlan floorPlanImages={floorPlanImages} isDesktop={isDesktop} />
      <Divider sx={dividerMargins} />
      <Features heroImage={heroImage} />
    </Box>
  );
}
