import type { Metadata } from "next";
import { Inter, Poppins, Bricolage_Grotesque, Cabin } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import { Container, ThemeProvider } from "@mui/material";
import theme from '../styles/theme';
import Footer from "@/components/Footer";
import Head from "next/head";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Legislaciones Municipalidad Vicente Lopez',
    default: 'Legislaciones - Municipalidad Vicente Lopez',
  },
  description: "Consultá las legislaciones vigentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        {/* <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} /> */}
        {/* Google Tag Manager - Head */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PLDQVGSG');`}
        </Script>
      </Head>
      <GoogleAnalytics />
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) - Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLDQVGSG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ThemeProvider theme={theme}>
          <Header />
          <div className="child-container">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

const styles = {
  minHeight: {
    minHeight: '105vh'
  }
}
