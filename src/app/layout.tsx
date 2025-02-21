import { ClerkProvider} from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AeroX Fashion",
  description: "This is our clothing brand where we will sell all types of shirt of ou aerox brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <TopHeader/>
      <Header/>
        {children}
        <Footer />
      </body>
    </html>
  </ClerkProvider>
  );
}
