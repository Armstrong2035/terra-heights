// components/form/ContactForm.js
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
  Stack,
} from "@mui/material";
import app from "@/utils/firebase"; // Import the default export
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { contact, analytics } from "@/utils/siteConfig";
// import { addTask } from "@/utils/clickupUtils";

// Initialize Firestore using the app instance
const db = getFirestore(app);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitPreference: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add form data to Firestore
      await addDoc(collection(db, contact.formConfig.defaultCollection), {
        ...formData,
        createdAt: serverTimestamp(),
        status: contact.formConfig.defaultStatus,
        source: contact.formConfig.defaultSource,
        project: contact.formConfig.projectName,
        status: "new",
        source: "website",
        project: "Emaar Terra Heights",
      });

      //add form data to clickup

      await fetch("/api/add-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Show success message
      setSnackbar({
        open: true,
        message: contact.successMessage,
        severity: "success",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        unitPreference: "",
      });

      // Fire Google Ads conversion tracking after successful form submission
      // Fire Google Ads conversion tracking after successful form submission
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: analytics.conversionEvents.googleConversionId,
        });
        console.log("Google Ads conversion tracking fired");
      }

      // Fire Facebook Pixel conversion event after successful form submission
      // Fire Facebook Pixel conversion event after successful form submission
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", analytics.conversionEvents.facebookEventName);
        console.log("Facebook Pixel conversion event fired");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSnackbar({
        open: true,
        message: contact.errorMessage,
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      id="sobha-one-element-contact-form"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        bgcolor: "#FCFFF3",
        p: 2,
        borderRadius: "8px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "90%",
          maxWidth: 600,
          borderRadius: "8px",
          bgcolor: "#1C6658",
          color: "white",
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: 500 }}>
          {contact.title}
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          {contact.subtitle}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <Stack spacing={3}>
            <TextField
              label={contact.formFields.name}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              sx={{
                bgcolor: "white",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                },
              }}
            />

            <TextField
              label={contact.formFields.email}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                },
              }}
            />

            <TextField
              label={contact.formFields.phone}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                },
              }}
            />

            <TextField
              select
              label={contact.formFields.unitPreference}
              name="unitPreference"
              value={formData.unitPreference}
              onChange={handleChange}
              required
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                },
              }}
            >
              <MenuItem value="1-bed">1 Bedroom</MenuItem>
              <MenuItem value="2-bed">2 Bedrooms</MenuItem>
              {/* <MenuItem value="3-bed">3 Bedrooms</MenuItem>
              <MenuItem value="4-bed">4 Bedrooms</MenuItem> */}
            </TextField>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{
                bgcolor: "white",
                color: "#1C6658",
                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                py: 1.5,
                fontSize: "1.1rem",
                mt: 2,
              }}
            >
              {isSubmitting ? (
                <CircularProgress size={24} sx={{ color: "#1C6658" }} />
              ) : (
                contact.submitButtonText
              )}
            </Button>
          </Stack>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
};

export default ContactForm;
