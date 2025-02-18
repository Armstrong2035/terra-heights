import { Card, Stack, Button, CardContent } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function RenderingsMobile({ images }) {
  const [activeType, setActiveType] = useState("4bed");

  return (
    <Card sx={{ mt: 5 }}>
      <Stack spacing={2}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            p: 2,
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Button
            variant={activeType === "1bed" ? "contained" : "outlined"}
            onClick={() => setActiveType("1bed")}
            sx={{
              backgroundColor:
                activeType === "1bed" ? "#005244" : "transparent",
              color: activeType === "1bed" ? "white" : "#005244",
              borderColor: "#005244",
              flex: "1 0 40%",
            }}
          >
            1 BED
          </Button>
          <Button
            variant={activeType === "2bed" ? "contained" : "outlined"}
            onClick={() => setActiveType("2bed")}
            sx={{
              backgroundColor:
                activeType === "2bed" ? "#005244" : "transparent",
              color: activeType === "2bed" ? "white" : "#005244",
              borderColor: "#005244",
              flex: "1 0 40%",
            }}
          >
            2 BED
          </Button>
          <Button
            variant={activeType === "4bed" ? "contained" : "outlined"}
            onClick={() => setActiveType("4bed")}
            sx={{
              backgroundColor:
                activeType === "4bed" ? "#005244" : "transparent",
              color: activeType === "4bed" ? "white" : "#005244",
              borderColor: "#005244",
              flex: "1 0 40%",
            }}
          >
            4 BED
          </Button>
          <Button
            variant={activeType === "5bed" ? "contained" : "outlined"}
            onClick={() => setActiveType("5bed")}
            sx={{
              backgroundColor:
                activeType === "5bed" ? "#005244" : "transparent",
              color: activeType === "5bed" ? "white" : "#005244",
              borderColor: "#005244",
              flex: "1 0 40%",
            }}
          >
            5 BED
          </Button>
        </Stack>

        <CardContent>
          <div
            style={{
              height: "80vh",
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100vh",
                height: "100vw",
                transform: "translate(-50%, -50%) rotate(90deg)",
                transformOrigin: "center",
              }}
            >
              <Image
                src={
                  activeType === "1bed"
                    ? images[2]
                    : activeType === "2bed"
                    ? images[3]
                    : activeType === "4bed"
                    ? images[0]
                    : images[1]
                }
                alt="Floor plan"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </CardContent>
      </Stack>
    </Card>
  );
}
