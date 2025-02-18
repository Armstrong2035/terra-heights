import { mdTypography } from "@/utils/styles";
import { Typography, Stack, Box, Button } from "@mui/material";

export default function SubText1({ isDesktop }) {
  const scrollToForm = () => {
    const form = document.getElementById("riverside-contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };
  const style1 = {
    heading: {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "37px",
      color: "rgb(0, 0, 0)",
    },
    body: {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#525252",
    },
  };

  return (
    <Stack
      spacing={isDesktop ? 10 : 3}
      justifyContent={"center"}
      // sx={{ border: "1px solid red" }}
    >
      <Box>
        <Typography sx={isDesktop ? style1.heading : mdTypography.heading32}>
          {" "}
          The Element, Sobha One
        </Typography>
        <Typography sx={style1.body}>
          1, 2, 3, and 5 bedroom apartments
        </Typography>
      </Box>

      <Box>
        <Typography sx={isDesktop ? style1.body : mdTypography.body16Gray}>
          Welcome to The Element at Sobha One, an exclusive residential
          community offering breath-taking views, world-class amenities, and
          meticulously crafted homes. Inspired by the harmony of nature and
          urban sophistication, The Element is a sanctuary designed for those
          who seek elegance and tranquility.
        </Typography>

        <Button
          variant="contained"
          onClick={scrollToForm}
          sx={{ backgroundColor: "#005244", mt: 3 }}
        >
          Register Your Interest
        </Button>
      </Box>
    </Stack>
  );
}
