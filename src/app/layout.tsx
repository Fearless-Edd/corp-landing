import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar/Navbar";
import Providers from "@/app/Providers";
import Footer from "@/components/ui/footer/Footer";
import getCurrentUser from "./actions/getCurrentUser";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "EDOPAG Solutions",
  description: "portfolio website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-gray-50 dark:bg-gray-900">
        <Providers>
          <Navbar currentUser={currentUser} />
          <div className="max-w-screen-xl mx-auto">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
