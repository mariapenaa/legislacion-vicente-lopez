import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import { Container, ThemeProvider } from "@mui/material";
import theme from '../styles/theme';
import Footer from "@/components/Footer";
import Head from "next/head";

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
      </Head>
      <body className={inter.className}>
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
