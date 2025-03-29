import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Stack,
  Box,
  Grid2,
  Container,
} from "@mui/material";
import Details from "./Details";
import Description from "./Description";
import Heading from "./Heading";
import typography from "@/utils/styles";
import HeroImage from "@/components/body/hero/HeroImage";
import { location } from "@/utils/siteConfig";

export default function Location({ masterPlan }) {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Heading typography={typography} />

        <Grid2 container spacing={10} sx={{ mt: 5 }} alignItems={"center"}>
          <Grid2 item size={{ sm: 12, md: 12, lg: 6 }}>
            <Description />
          </Grid2>

          <Grid2 item size={{ sm: 12, md: 12, lg: 6 }}>
            <Details />
          </Grid2>

          <Grid2 item size={{ sm: 12, md: 12, lg: 12 }}>
            <HeroImage heroImage={masterPlan} />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
