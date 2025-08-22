import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next JS App",
  description: "Simple app with authentication & products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-100 text-gray-900`}
      >
        <Providers>
          {/* Navbar */}
          <Navbar></Navbar>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 text-center">
            © {new Date().getFullYear()} NextAssignment. All rights reserved.
          </footer>
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
