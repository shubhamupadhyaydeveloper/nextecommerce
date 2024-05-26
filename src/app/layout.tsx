import type { Metadata } from "next";
import { Inter as FontSans, Lato ,Anton } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/helper/authProvider";
import Footer from "@/components/homepage/Footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const lato = Lato({
  weight: ["900"],
  subsets: ["latin"],
  variable : "--font-lato"
});

const anton = Anton({
  weight : ["400"],
  subsets : ["latin"],
  variable : "--font-anton"
})

export const metadata: Metadata = {
  title: "Nikee",
  description: "This is an ecommerce website for all kinds of products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          lato.variable,
          anton.variable
        )}
      >
        <AuthProvider>
          <Toaster richColors />
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
