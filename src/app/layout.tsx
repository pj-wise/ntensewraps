import type { Metadata } from "next";
import "./globals.css";
import { clashDisplay } from "./fonts";
import { Navbar } from "./components/navbar";
import Script from "next/script"
import { FooterSection } from "./components/footer-section";

export const metadata: Metadata = {
  title: "Ntense Car Wraps",
  description:
    "Ntense Wraps: We make your car look amazing! Full and partial commercial wraps, color change wraps, cosmetic paint protection film (PPF), interior/exterior detailing, paint correction, and taillight/headlight tinting.",
  openGraph: {
    title: "Ntense Car Wraps",
    images: [
      {
        url: "/img/site-logo.png",
        width: 800,
        height: 800,
        alt: "Ntense Logo"
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clashDisplay.className}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GADS_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GADS_ID}');
            `,
          }}
        />
         <Script id="lead-form-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': '${process.env.NEXT_PUBLIC_GADS_ID}/GIT_CKrcrKwbELHfh54q',
                'value': 1.0,
                'currency': 'USD',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        <Script id="conversion-tracking" strategy="afterInteractive">
            {`
              gtag('event', 'conversion', {
                'send_to': '${process.env.NEXT_PUBLIC_GADS_ID}/xQ2PCOvRq60bELHfh54q',
                'value': 1.0,
                'currency': 'USD'
                });`
            }
        </Script>
      </head>
      <body className="bg-background text-foreground">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
          {children}
        <FooterSection />
      </body>
    </html>
  );
}
