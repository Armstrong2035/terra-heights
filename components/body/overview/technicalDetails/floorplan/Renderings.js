import {
  Card,
  CardContent,
  Stack,
  Button,
  Modal,
  IconButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { floorPlans } from "@/utils/siteConfig";

const buttonStyles = (isActive) => ({
  backgroundColor: isActive ? "#005244" : "transparent",
  color: isActive ? "white" : "#005244",
  borderColor: "#005244",
  "&:hover": {
    backgroundColor: isActive ? "#005244" : "transparent",
    opacity: 0.9,
  },
});

export default function Renderings({ images }) {
  const [activeType, setActiveType] = useState("4bed");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Get the current image based on active type
  const currentImage =
    images[
      floorPlans.bedroomTypes.find((type) => type.id === activeType)
        ?.imageIndex || 0
    ];

  const handleImageClick = () => {
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <Card sx={{ mt: 5 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ p: 2 }}
        >
          {floorPlans.bedroomTypes.map((type) => (
            <Button
              key={type.id}
              variant={activeType === type.id ? "contained" : "outlined"}
              onClick={() => setActiveType(type.id)}
              sx={buttonStyles(activeType === type.id)}
            >
              {type.label}
            </Button>
          ))}
        </Stack>
        <CardContent>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              cursor: "pointer",
            }}
            onClick={handleImageClick}
          >
            <Image
              src={currentImage}
              alt={`${activeType} layout`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              style={{ objectFit: "contain" }}
              priority={activeType === "4bed"}
            />
            {/* Hover Overlay */}
            <Box
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
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <Box
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "8px 16px",
                  borderRadius: "4px",
                }}
              >
                Click to expand
              </Box>
            </Box>
          </div>
        </CardContent>
      </Card>

      {/* Lightbox Modal */}
      <Modal
        open={lightboxOpen}
        onClose={handleCloseLightbox}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <Box
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
            onClick={handleCloseLightbox}
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

          {/* Bedroom Type Buttons in Lightbox */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              position: "absolute",
              top: 16,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              bgcolor: "rgba(0, 0, 0, 0.5)",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            {floorPlans.bedroomTypes.map((type) => (
              <Button
                key={type.id}
                variant={activeType === type.id ? "contained" : "outlined"}
                onClick={() => setActiveType(type.id)}
                sx={{
                  ...buttonStyles(activeType === type.id),
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                }}
              >
                {type.label}
              </Button>
            ))}
          </Stack>

          {/* Lightbox Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={currentImage}
              alt={`${activeType} layout`}
              fill
              style={{
                objectFit: "contain",
              }}
              quality={100}
              priority
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}
