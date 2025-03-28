import { Shantell_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/Navbar";
import SmoothScroll from "./Scroll/SmoothScroll";
import Template from "./template";
import Footer from "./footer/Footer";

const shantellSans = Shantell_Sans({
  variable: "--font-shantell-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Słodka Pętelka",
  description: "Słodka Pętelka - domowe ciasta i słodycze",
  url: "https://slodkapetelka.pl",
  type: "website",
  siteName: "Słodka Pętelka",
  locale: "pl_PL",
  keywords: ["ciasta", "słodycze", "domowe ciasta", "domowe słodycze"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${shantellSans.variable} antialiased`}>
        <Navbar />
        <main>
          <div className="container mx-auto min-h-screen">
            <Template>{children}</Template>
          </div>
          <Footer />
        </main>
        <SmoothScroll />
      </body>
    </html>
  );
}
