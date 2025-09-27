import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Junaid Nawaz | Web Developer & SaaS Builder",
  description: "Portfolio of Junaid Nawaz - MERN Stack Developer, SaaS Builder, and WordPress Expert.",
  icons: {
    icon: "/favicon.png",       // Standard
    shortcut: "/favicon.png",   // Shortcut
    apple: "/favicon.png",      // Apple devices
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
