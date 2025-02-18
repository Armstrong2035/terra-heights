import { Box, Container } from "@mui/material";
import Heading from "./Heading";
import Renderings from "./Renderings";
import SubText from "./SubText";
import SmRenderings from "./SmRenderings";

export default function FloorPlan({ isDesktop, floorPlanImages }) {
  return (
    <Container>
      <Heading />

      {isDesktop ? (
        <Renderings images={floorPlanImages} />
      ) : (
        <SmRenderings images={floorPlanImages} />
      )}
      {/* <SubText /> */}
    </Container>
  );
}
