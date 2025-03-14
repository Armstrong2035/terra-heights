import { Box, Container } from "@mui/material";
import Heading from "./Heading";
import HeroImage from "@/components/body/hero/HeroImage";
import FeaturesList from "./Description";
import { features } from "@/utils/siteConfig";

export default function Features({ heroImage }) {
  return (
    <Container>
      <Box sx={{ mb: 10 }}>
        <Heading />
      </Box>

      <HeroImage heroImage={heroImage} />
      <FeaturesList />
    </Container>
  );
}
