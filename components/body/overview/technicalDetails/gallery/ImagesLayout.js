import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSwipeable } from "react-swipeable";

export default function ImagesLayout({ images }) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [sliding, setSliding] = useState(false);

  const handleOpen = (index) => {
    setCurrentImage(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

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
    <>
      <Box sx={{ width: "100%", overflow: "hidden", mt: 5 }}>
        <ImageList variant="masonry" cols={2} gap={30}>
          {images.map((image, index) => {
            const isFirstImage = index === 0;
            const imageHeight = isFirstImage ? 400 : 300;

            return (
              <ImageListItem
                key={index}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  gridColumn: isFirstImage ? "span 2" : "span 1",
                  cursor: "pointer",
                  "&:hover": {
                    "& .image-overlay": {
                      opacity: 1,
                    },
                  },
                }}
                onClick={() => handleOpen(index)}
              >
                <div
                  style={{
                    position: "relative",
                    height: imageHeight,
                    width: "100%",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    sizes={isFirstImage ? "100vw" : "50vw"}
                  />
                  {/* Hover Overlay */}
                  <Box
                    className="image-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <Box
                      sx={{
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      Click to expand
                    </Box>
                  </Box>
                </div>
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>

      {/* Lightbox Modal */}
      <Modal
        open={open}
        onClose={handleClose}
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
            width: "95%",
            height: "95vh",
            maxWidth: "2000px",
            outline: "none",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "white",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              zIndex: 10,
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Navigation Arrows */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              zIndex: 5,
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

          {/* Previous Image (for transition) */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              opacity: sliding ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              zIndex: 1,
            }}
          >
            <Image
              src={images[(currentImage - 1 + images.length) % images.length]}
              alt="Previous image"
              fill
              style={{
                objectFit: "contain",
              }}
              quality={100}
            />
          </Box>

          {/* Current Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              zIndex: 2,
            }}
          >
            <Image
              src={images[currentImage]}
              alt={`Gallery image ${currentImage + 1}`}
              fill
              style={{
                objectFit: "contain",
              }}
              quality={100}
            />
          </Box>

          {/* Image Counter */}
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              px: 2,
              py: 1,
              borderRadius: 1,
              zIndex: 5,
            }}
          >
            {currentImage + 1} / {images.length}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
