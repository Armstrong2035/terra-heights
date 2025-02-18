// "use client";
// import {
//   Box,
//   TextField,
//   MenuItem,
//   Button,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { useState } from "react";
// import { db } from "@/utils/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     unitPreference: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const docRef = await addDoc(collection(db, "leads"), {
//         ...formData,
//         createdAt: serverTimestamp(),
//         status: "new",
//         source: "website",
//         project: "Damac Riverside Views",
//       });

//       console.log("Document written with ID: ", docRef.id);

//       // Clear form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         unitPreference: "",
//       });
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Keep your existing return JSX, just update the form onSubmit and add status message
//   return (
//     <Box
//       id="riverside-contact-form"
//       sx={{
//         bgcolor: "#1C6658",
//         p: 4,
//         borderRadius: 2,
//         textAlign: "center",
//       }}
//     >
//       <Stack spacing={1} sx={{ mb: 4, color: "white", alignItems: "center" }}>
//         <Typography variant="h4" sx={{ fontWeight: 500 }}>
//           Book your unit
//         </Typography>
//         <Typography variant="body1">
//           Fill this form. Your specialist is waiting for you
//         </Typography>
//       </Stack>

//       {submitStatus.message && (
//         <Typography
//           sx={{
//             mb: 2,
//             color: submitStatus.type === "success" ? "#4caf50" : "#f44336",
//             bgcolor: "white",
//             p: 1,
//             borderRadius: 1,
//           }}
//         >
//           {submitStatus.message}
//         </Typography>
//       )}

//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//         sx={{
//           width: "100%",
//           maxWidth: 400,
//           mx: "auto",
//         }}
//       >
//         <Stack spacing={3}>
//           {/* Keep your existing TextField components */}
//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             fullWidth
//             sx={{
//               bgcolor: "white",
//               borderRadius: 1,
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "white",
//                 },
//               },
//             }}
//           />

//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             fullWidth
//             sx={{
//               bgcolor: "white",
//               borderRadius: 1,
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "white",
//                 },
//               },
//             }}
//           />

//           <TextField
//             label="Phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             fullWidth
//             sx={{
//               bgcolor: "white",
//               borderRadius: 1,
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "white",
//                 },
//               },
//             }}
//           />

//           <TextField
//             select
//             label="Unit Preference"
//             name="unitPreference"
//             value={formData.unitPreference}
//             onChange={handleChange}
//             required
//             fullWidth
//             sx={{
//               bgcolor: "white",
//               borderRadius: 1,
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "white",
//                 },
//               },
//             }}
//           >
//             <MenuItem value="4-bed">4 Bedroom</MenuItem>
//             <MenuItem value="5-bed">5 Bedroom</MenuItem>
//           </TextField>

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             disabled={isSubmitting}
//             sx={{
//               bgcolor: "white",
//               color: "#1C6658",
//               "&:hover": {
//                 bgcolor: "rgba(255,255,255,0.9)",
//               },
//               py: 1.5,
//               fontSize: "1.1rem",
//             }}
//           >
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </Button>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }
