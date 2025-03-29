// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./siteConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;

// Only initialize analytics on the client side
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Export the app instance
export { app };
export default app;
