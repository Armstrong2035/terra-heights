import Heading from "./Heading";
import { Box, Container } from "@mui/material";
// import one from "../../../../../public/masonry/one.png";
// import two from "../../../../../public/masonry/two.png";
// import three from "../../../../../public/masonry/three.png";
// import four from "../../../../../public/masonry/four.png";
// import five from "../../../../../public/masonry/five.png";
// import six from "../../../../../public/masonry/six.png";
import ImagesLayout from "./ImagesLayout";
import SmallImageList from "./SmallImageList";

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
