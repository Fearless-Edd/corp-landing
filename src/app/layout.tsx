import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/ui/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EDOPAG Solutions",
  description: "portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
