import {Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./component/navigation/Nav";
import Footer from "./component/Footer";
import { SideProvider } from "./providers";

const roboto = Roboto( {
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});



export const metadata = {
  title: "HR Platform",
  description: "A simple HR platform to connect job seekers with employers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Nav />
        <div className="min-h-screen">
          <SideProvider>
            {children}
          </SideProvider>
        </div>
        
        <Footer/>
      </body>
    </html>
  );
}
