import {Roboto } from "next/font/google";
import "./globals.css";
import Footer from "../Footer";
import Nav from "../navigation/Nav";

const roboto = Roboto( {
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});



export const metadata = {
  title: "HR Platform",
  description: "A simple HR platform built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Nav />
        <div className="min-h-screen">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}
