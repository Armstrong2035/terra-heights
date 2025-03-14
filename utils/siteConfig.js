// utils/siteConfig.js
// Central configuration module for the entire site

// Site Metadata
const siteMetadata = {
  title: "The Element at Sobha One",
  description:
    "Experience luxury residential living redefined at The Element, where urban sophistication meets natural harmony in Dubai. Features 1-4 bedroom units with panoramic views.",
  keywords: [
    "Sobha Realty",
    "The Element",
    "Sobha One",
    "Dubai luxury apartments",
    "Dubai real estate",
    "Ras Al Khor",
    "luxury residential",
    "Dubai property",
    "golf course view apartments",
    "Dubai Creek view",
  ],
  icons: {
    favicon:
      "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
  },
  themeColor: "#1C6658",
  backgroundColor: "#FCFFF3",
};

// Header & Footer
const header = {
  companyName: "Subarashi",
  projectName: "The Element at Sobha One",
};

// Hero Section
const hero = {
  title: ["- The art of", "sophistication,", "made tangible."],
  projectName: "The Element, Sobha One",
  projectTypes: "1, 2, 3, and 5 bedroom apartments",
  description:
    "Welcome to The Element at Sobha One, an exclusive residential community offering breath-taking views, world-class amenities, and meticulously crafted homes. Inspired by the harmony of nature and urban sophistication, The Element is a sanctuary designed for those who seek elegance and tranquility.",
  ctaText: "Register Your Interest",
  heroImage:
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1739812183/Image_7_rhskvt.png",
};

// Location Section
const location = {
  title: "Location",
  subtitle: "Plug in and plug out when you like, (how you like)",
  description:
    "Strategically positioned within Sobha One, The Element ensures seamless connectivity while offering a serene retreat from the city's hustle. It's like being a double agent",
  proximities: [
    "5 Minutes – Dubai Creek Harbour",
    "10 Minutes – Downtown Dubai & Business Bay",
    "15 Minutes – Dubai International Airport",
    "20 Minutes – Dubai Marina & The Palm Jumeirah",
  ],
  additionalInfo:
    "Embrace the perfect balance of accessibility and exclusivity. Nestled within the twin interchanges on Ras Al Khor Road, this is a haven touched by the essence of the elements.",
  startingPrice: "Starting Price: AED 1.49M",
  masterPlan:
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1600,dpr_auto/v1739877645/Image_8_iyjper.png",
  apartmentDetails: [
    { label: "Unit Types", value: "1, 2, 3 & 4 Bedrooms" },
    { label: "Area Range", value: "690 - 1,331 sq.ft" },
    { label: "Handover Date", value: "Q2 2029" },
    { label: "Payment Plan", value: "70/30" },
    { label: "Deposit Required", value: "20%" },
  ],
};

// Gallery Section
const gallery = {
  title: "Gallery",
  subtitle: "Detail and Sophistication in every element",
  images: [
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812368/Image_17_uijjge.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812345/Image_14_z1k4zk.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812176/Image_6_jeo8hz.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812174/Image_3_t18f2j.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812370/Image_15_h3tqqe.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812166/Image_4_gfo9g1.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812167/Image_10_vnj8dm.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812174/Image_2_jcasuw.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812348/Image_16_jtzocq.png",
  ],
};

// Floor Plan Section
const floorPlans = {
  title: "Floor Plans",
  subtitle:
    "Choose from an exquisite selection of 1 to 4-bedroom residences, each offering a unique blend of luxury and comfort.",
  additionalText:
    "Open spaces, natural light, and a seamless blend of indoor and outdoor living create a home that feels like a retreat.",
  images: [
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1400,dpr_auto/v1739877699/3_-_TYPE_A_gbtlwi.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1400,dpr_auto/v1739877698/4_-_TYPE_A_ekjjqw.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1400,dpr_auto/v1739877699/1_-_TYPE_A_pjuhx2.png",
    "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1400,dpr_auto/v1739877697/2_-_TYPE_B_z5w7a1.png",
  ],
  bedroomTypes: [
    { id: "1bed", label: "1 Bedroom", imageIndex: 2 },
    { id: "2bed", label: "2 Bedrooms", imageIndex: 3 },
    { id: "3bed", label: "3 Bedrooms", imageIndex: 0 },
    { id: "4bed", label: "4 Bedrooms", imageIndex: 1 },
  ],
};

// Features/Amenities Section
const features = {
  title: "Features",
  subtitle: "Finest Details and Luxurious Amenities",
  amenitiesTitle: "EXCLUSIVE AMENITIES",
  amenities: [
    {
      iconName: "SportsGolf",
      title: "18-HOLE PITCH & PUTT GOLF COURSE",
    },
    {
      iconName: "Pool",
      title: "INFINITY-EDGE SWIMMING POOLS",
    },
    {
      iconName: "FitnessCenter",
      title: "OUTDOOR & INDOOR FITNESS CENTERS",
    },
    {
      iconName: "Laptop",
      title: "CO-WORKING SPACES & BUSINESS LOUNGE",
    },
    {
      iconName: "Theaters",
      title: "PRIVATE CINEMA & VR GAMING ZONE",
    },
    {
      iconName: "Park",
      title: "KIDS' PLAY AREAS & FAMILY PARKS",
    },
    {
      iconName: "SelfImprovement",
      title: "YOGA, MEDITATION & WELLNESS SPACES",
    },
    {
      iconName: "Pets",
      title: "PET-FRIENDLY ZONES & LANDSCAPED GARDENS",
    },
    {
      iconName: "Restaurant",
      title: "RETAIL & DINING PROMENADE BY THE WATER",
    },
  ],
};

// Contact Form
const contact = {
  title: "Register Your Interest",
  subtitle:
    "Fill in your details below and our property specialist will contact you soon",
  formFields: {
    name: "Full Name",
    email: "Email",
    phone: "Phone Number",
    unitPreference: "Unit Preference",
  },
  unitOptions: [
    { value: "4-bed", label: "Studio" },
    { value: "1-bed", label: "1 Bedroom" },
    { value: "2-bed", label: "2 Bedroom" },
    { value: "5-bed", label: "3 + Bedroom" },
  ],
  submitButtonText: "Submit",
  successMessage:
    "Thank you! Your information has been submitted successfully.",
  errorMessage:
    "There was an error submitting your information. Please try again.",
  formConfig: {
    defaultCollection: "leads",
    defaultStatus: "new",
    defaultSource: "website",
    projectName: "Sobha One Element",
  },
};

// Analytics and Tracking
const analytics = {
  googleAnalyticsId: "AW-16909263453",
  facebookPixelId: "1659058738047957",
  conversionEvents: {
    googleConversionId: "AW-16909263453/jTrDCNHE5qYaEN3E-_4-",
    facebookEventName: "Lead",
  },
};

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2mT9KA6N7zTRsz-TUDnpfllyBfnQTQH4",
  authDomain: "subarashi-real-estate.firebaseapp.com",
  projectId: "subarashi-real-estate",
  storageBucket: "subarashi-real-estate.appspot.com",
  messagingSenderId: "284995572575",
  appId: "1:284995572575:web:4019d4060000a3a8c81cea",
  measurementId: "G-LMKH4GB7LP",
};

// Export all configuration sections
export {
  siteMetadata,
  header,
  hero,
  location,
  gallery,
  floorPlans,
  features,
  contact,
  analytics,
  firebaseConfig,
};

// Export default complete config
const siteConfig = {
  siteMetadata,
  header,
  hero,
  location,
  gallery,
  floorPlans,
  features,
  contact,
  analytics,
  firebaseConfig,
};

export default siteConfig;
