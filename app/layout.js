import { Manrope } from "next/font/google";

export const metadata = {
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
    icon: "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
    shortcut:
      "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
    apple:
      "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
    other: {
      rel: "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
      url: "https://res.cloudinary.com/dulafqaoq/image/upload/t_Favicon/v1739530384/SUBRASHI_2_nex463.png",
    },
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body style={{ backgroundColor: "#FCFFF3" }}>{children}</body>
    </html>
  );
}
