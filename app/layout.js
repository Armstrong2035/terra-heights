import { Manrope } from "next/font/google";
import Script from "next/script";
import { siteMetadata, analytics } from "@/utils/siteConfig";
import localFont from 'next/font/local';

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  icons: {
    icon: siteMetadata.icons.favicon,
    shortcut: siteMetadata.icons.favicon,
    apple: siteMetadata.icons.favicon,
    other: {
      rel: siteMetadata.icons.favicon,
      url: siteMetadata.icons.favicon,
    },
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const Degular = localFont({
  src: [
    {
      path: '../public/fonts/jugular.otf',
      weight: '400',
      style: 'normal',
    },

  ],
  display: 'swap',
  variable: '--font-degular',

});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Degular.className}>
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${analytics.facebookPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body style={{ backgroundColor: siteMetadata.backgroundColor }}>
        {children}

        {/* Google tag (gtag.js) - Direct Implementation */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${analytics.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics-direct" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analytics.googleAnalyticsId}');
          `}
        </Script>

        {/* Facebook Pixel Code */}
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
            fbq('init', '${analytics.facebookPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
