// utils/siteConfig.js
// Central configuration module for the entire site

// Site Metadata
const siteMetadata = {
  title: "Terra Heights",
  description:
    "Terra Heights is a thoughtfully designed residential community just minutes from Expo City. Offering modern 1 and 2-bedroom apartments, this development combines sleek architecture with green open spaces. With a focus on connectivity, sustainability, and lifestyle, Terra Heights is perfect for those seeking a vibrant, well-balanced urban living experience.",
  keywords: [
    "Emaar",
    "Terra Heights",
    "Sobha One",
    "Dubai luxury apartments",
    "Dubai real estate",
    "Expo Living",
    "luxury residential",
    "Dubai property",
    "golf course view apartments",
    "Expo City",
  ],
  icons: {
    favicon:
      "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
  },
  themeColor: "#1C6658",
  backgroundColor: "#ffffff",
};

// Header & Footer
const header = {
  companyName: "Subarashi",
  projectName: "Emaar Terra Heights",
};

// Hero Section
const hero = {
  title: ["- Modern Living", "made to accommodate", "today, and tomorrow."],
  projectName: "Terra Heights, Emaar",
  projectTypes: "1 & 2 bedroom apartments",
  description:
    "Welcome to Terra Heights, an exclusive residential community offering breath-taking views, world-class amenities, and meticulously crafted homes. Inspired by the harmony of nature and urban sophistication, The Element is a sanctuary designed for those who seek elegance and tranquility.",
  ctaText: "Register Your Interest",
  heroImage:
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009068/TERRA_HEIGHTS_XL_BROCHURE-28_y4s08g.jpg",
};

// Location Section
const location = {
  title: "Location",
  subtitle: "Prime Intersection with Seamless Connectivity",
  description:
    "Located within Expo Living, Terra Heights offers a unique blend of modern convenience and natural tranquility.",
  proximities: [
    "5 Minutes – Expo City Dubai",
    "10 Minutes – Al Maktoum International Airport",
    "15 Minutes – Dubai Marina",
    "20 Minutes – Downtown Dubai",
  ],
  additionalInfo:
    "Its strategic position near major transportation hubs makes commuting effortless while ensuring residents remain connected to Dubai’s key attractions.",
  startingPrice: "Starting Price: AED 1.4M",
  masterPlan:
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744090334/Terra_Heights_page-0006_iakn7k.jpg",
  apartmentDetails: [
    { label: "Unit Types", value: "1 & 2 Bedrooms" },
    { label: "Area Range", value: "749 - 1,118 sq.ft" },
    { label: "Handover Date", value: "2028" },
    { label: "Payment Plan", value: "Secure your home with just 10% down, followed by easy installments during construction, and 30% on handover in 2028." },
    /*{ label: "Deposit Required", value: "20%" },*/
  ],
};

// Gallery Section
const gallery = {
  title: "Gallery",
  subtitle: "All the dots connect at Terra Heights",
  images: [
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009072/TERRA_HEIGHTS_XL_BROCHURE-35_wbzaqa.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009069/TERRA_HEIGHTS_XL_BROCHURE-18_nlibic.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009071/TERRA_HEIGHTS_XL_BROCHURE-32_aewqhq.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009070/TERRA_HEIGHTS_XL_BROCHURE-11_ufxwtz.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009069/TERRA_HEIGHTS_XL_BROCHURE-34_dj4urv.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009066/TERRA_HEIGHTS_XL_BROCHURE-23_dbn0o3.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009067/TERRA_HEIGHTS_XL_BROCHURE-13_j6nufi.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744009060/TERRA_HEIGHTS_XL_BROCHURE-7_xzpy4a.jpg",
  ],
};

// Floor Plan Section
const floorPlans = {
  title: "Floor Plans",
  subtitle:
    "Detailed layouts for 1 & 2-bedroom apartments",
  additionalText:
    "Open spaces, natural light, and a seamless blend of indoor and outdoor living create a home that feels like a retreat.",
  images: [
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/1_Bed_peughe.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/2_Bed_eqnyp4.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/1_Bed_peughe.jpg",
    "https://res.cloudinary.com/dulafqaoq/image/upload/v1744091057/2_Bed_eqnyp4.jpg",
  ],
  bedroomTypes: [
    { id: "1bed", label: "1 Bedroom", imageIndex: 2 },
    { id: "2bed", label: "2 Bedrooms", imageIndex: 3 },
    /* { id: "3bed", label: "3 Bedrooms", imageIndex: 0 },
    { id: "4bed", label: "4 Bedrooms", imageIndex: 1 }, */
  ],
};

// Features/Amenities Section
const features = {
  title: "Features",
  subtitle: " A Community Built for Relaxation and Recreation",
  amenitiesTitle: "EXCLUSIVE AMENITIES",
  amenities: [
    {
      iconName: "SportsGolf",
      title: "EXCITING MINI GOLF AREA",
    },
    {
      iconName: "Pool",
      title: "ADULT AND KIDS POOLS",
    },
    {
      iconName: "FitnessCenter",
      title: "WELL-EQUIPPED GYM",
    },
    {
      iconName: "Laptop",
      title: "MULTIPURPOSE ROOMS",
    },
    /*{
      iconName: "Theaters",
      title: "PRIVATE CINEMA & VR GAMING ZONE",
    }, */
    {
      iconName: "Park",
      title: "OUTDOOR PLAY SPACES FOR CHILDREN",
    },
    {
      iconName: "SelfImprovement",
      title: "YOGA DECK TO UNWIND AND RECHARGE",
    },
    /* {
      iconName: "Pets",
      title: "PET-FRIENDLY ZONES & LANDSCAPED GARDENS",
    }, */
    {
      iconName: "Restaurant",
      title: "BARBECUE SPOTS FOR SOCIAL EVENINGS",
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
