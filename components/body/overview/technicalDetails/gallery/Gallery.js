import Heading from "./Heading";
import { Box, Container } from "@mui/material";
import ImagesLayout from "./ImagesLayout";
import SmallImageList from "./SmallImageList";
import { gallery } from "@/utils/siteConfig";

export default function Gallery({ isDesktop, images }) {
  return (
    <Box sx={{ mt: 10 }}>
      <Heading />

      {isDesktop ? (
        <ImagesLayout images={images} isDesktop={isDesktop} />
      ) : (
        <SmallImageList images={images} isDesktop={isDesktop} />
      )}
    </Box>
  );
}
