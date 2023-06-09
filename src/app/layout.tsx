import "./globals.css";
import Navbar from "@/components/ui/navbar/Navbar";
import Providers from "@/app/Providers";
import Footer from "@/components/ui/footer/Footer";

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
      <body className="bg-gray-50 dark:bg-gray-900">
        <Providers>
          <Navbar />
          <div className="max-w-screen-xl mx-auto">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
