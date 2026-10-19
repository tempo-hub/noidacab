import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noidacab.com"),

  title: "Noida Cab",
  description:
    "Book premium and affordable Taxi in Noida. Safe local taxis, outstation rides, and airport transfers available 24/7. Best rates guaranteed.",

  verification: {
    google: "xQOGS92C0fwHkjIAKLSmyEpLriRTVmmrJydUxb9O6cs",
  },

  openGraph: {
    title: "Noida Cab",
    description:
      "Book premium and affordable taxis in Noida for local travel, outstation rides, and airport transfers.",
    url: "https://www.noidacab.com",
    siteName: "Noida Cab",
    type: "website",
    images: ["/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Noida Cab",
    description:
      "Book affordable taxis in Noida for local travel, outstation trips, and airport transfers.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        {children}
        
        <Footer />
        
        </body>
    </html>
  );
}
