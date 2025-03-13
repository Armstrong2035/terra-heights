// import { useEffect } from "react";
// import { Box, Typography, Paper } from "@mui/material";

// const ClickUpForm = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://app-cdn.clickup.com/assets/js/forms-embed/v1.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <Box
//       id="riverside-contact-form"
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         mt: 4,
//         bgcolor: "#FCFFF3",
//         p: 2,
//         borderRadius: "8px",
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           p: 3,
//           width: "90%",
//           maxWidth: 800,
//           borderRadius: "8px",
//         }}
//       >
//         <iframe
//           className="clickup-embed clickup-dynamic-height"
//           src="https://forms.clickup.com/9018775511/f/8crz5yq-11698/UM42MPWCT3GIJPQ2GD"
//           width="100%"
//           height="600px"
//           style={{
//             background: "transparent",
//             border: "none",
//             borderRadius: "8px",
//           }}
//           onWheel={() => {}} // Added from your provided iframe
//         />
//       </Paper>
//     </Box>
//   );
// };

// export default ClickUpForm;
