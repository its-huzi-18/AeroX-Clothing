import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./components/Providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// ✅ Keep `metadata` separate (excluding `viewport` & `themeColor`)
export const metadata: Metadata = {
  title: "AeroX Wear",
  description: "This is our clothing brand where we will sell all types of shirts of our AeroX brand",
  keywords: ["clothing", "fashion", "AeroX", "t-shirts", "apparel", "wear","Aeroxwear","Aerox wear","aerox wear"], // SEO keywords
  applicationName: "AeroX Wear",
  creator: "AeroX Team",
  robots: "index, follow",
  openGraph: {
    title: "AeroX Wear",
    description: "Premium AeroX clothing brand offering top-quality shirts.",
    url: "https://aeroxwear.com",
    type: "website",
    images: [
      {
        url: "https://aeroxwear.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AeroX Wear Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aeroxwear",
    title: "AeroX Wear",
    description: "Premium clothing brand selling high-quality t-shirts.",
    images: ["https://aeroxwear.com/twitter-image.jpg"],
  },
};

// ✅ Move `viewport` to a separate export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// ✅ Move `themeColor` to a separate export
export const themeColor = "#ffffff";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position="top-right" />
          <Providers>
            <TopHeader />
            <Header />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
