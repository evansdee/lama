import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import QueryProvider from "./QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:"Next js 15 HomePage",
    template:"%s | Next js 14"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          {/* <QueryProvider > */}
            <NavBar />
            {children}
            <Footer />
          {/* </QueryProvider> */}
        </div>
      </body>
    </html>
  );
}
