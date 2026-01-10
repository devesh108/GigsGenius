"use client"; // ✅ Required for using useEffect
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppProvider } from "./context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#f8fafc" }}
      >
        {/* ✅ Wrap the entire app in AppProvider */}
        <AppProvider>
          {/* ✅ Header */}
          <Header />

          {/* ✅ Main content area */}
          <main className="pt-5 px-3">{children}</main>

          {/* ✅ Footer */}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
