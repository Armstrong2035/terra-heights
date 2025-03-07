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
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1659058738047957&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body style={{ backgroundColor: "#FCFFF3" }}>
        {children}

        {/* Google tag (gtag.js) - Direct Implementation */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16909263453"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-direct" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16909263453');
          `}
        </Script>

        {/* Facebook Pixel Code
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1659058738047957');
            fbq('track', 'PageView');
          `}
        </Script> */}
      </body>
    </html>
  );
}
