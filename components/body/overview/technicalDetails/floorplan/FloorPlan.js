import { Box, Container } from "@mui/material";
import Heading from "./Heading";
import Renderings from "./Renderings";
import SubText from "./SubText";
import SmRenderings from "./SmRenderings";
import { floorPlans } from "@/utils/siteConfig";

export default function FloorPlan({ isDesktop, floorPlanImages }) {
  return (
    <Container>
      <Heading />

      {isDesktop ? (
        <Renderings images={floorPlanImages} />
      ) : (
        <SmRenderings images={floorPlanImages} />
      )}

      {/* Uncomment if you want to use the additional subtext */}
      {/* <SubText /> */}
    </Container>
  );
}
