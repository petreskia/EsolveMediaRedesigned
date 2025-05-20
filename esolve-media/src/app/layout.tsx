import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Esolve Media",
  description:
    "Expert teams. Tailored to your mission. We assemble high-performing specialists across creative, tech, and marketing disciplines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Calendly CSS */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        {/* Calendly Script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body cz-shortcut-listen="true">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
