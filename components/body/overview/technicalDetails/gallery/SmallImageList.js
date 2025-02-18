import { Box, IconButton, Modal, Grid, Paper, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

const Lightbox = ({ images, startIndex = 0, onClose, open }) => {
  const [currentImage, setCurrentImage] = useState(startIndex);
  const [sliding, setSliding] = useState(false);
  const theme = useTheme();

  const nextImage = () => {
    setSliding(true);
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setSliding(false), 500);
  };

  const prevImage = () => {
    setSliding(true);
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setSliding(false), 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <Box
        {...handlers}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          maxWidth: theme.breakpoints.values.lg,
          maxHeight: "100vh",
          p: 4,
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: theme.spacing(2),
            top: theme.spacing(2),
            color: "white",
            zIndex: 1,
            "&:hover": {
              color: "grey.300",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Image Container */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Previous Image */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              opacity: sliding ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Image
              src={images[(currentImage - 1 + images.length) % images.length]}
              alt="previous image"
              fill
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </Box>

          {/* Current Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={images[currentImage]}
              alt={`image ${currentImage + 1}`}
              fill
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </Box>
        </Box>

        {/* Navigation Arrows */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <IconButton
            onClick={prevImage}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.8)",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.9)",
                transform: "scale(1.1)",
              },
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={nextImage}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.8)",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.9)",
                transform: "scale(1.1)",
              },
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>

        {/* Dots Navigation */}
        <Box
          sx={{
            position: "absolute",
            bottom: theme.spacing(2),
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                setSliding(true);
                setCurrentImage(index);
                setTimeout(() => setSliding(false), 500);
              }}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor:
                  currentImage === index ? "white" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                transform: currentImage === index ? "scale(1.2)" : "scale(1)",
                "&:hover": {
                  bgcolor: "white",
                  transform: "scale(1.2)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

// Thumbnail Grid Component
const ImageGallery = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <Box sx={{ width: "100%", mt: 10 }}>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={6} md={4} lg={3} key={index}>
            <Paper
              elevation={2}
              sx={{
                position: "relative",
                paddingTop: "100%", // 1:1 Aspect ratio
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 1,
              }}
              onClick={() => {
                setStartIndex(index);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={image}
                alt={`thumbnail ${index + 1}`}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Lightbox
        images={images}
        startIndex={startIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </Box>
  );
};

export default ImageGallery;
