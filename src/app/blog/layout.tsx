import { Roboto } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/app/Providers";
import BlogFooter from "@/components/blog/footer/BlogFooter";
import BlogNavbar from "@/components/blog/navbar/BlogNavbar";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "EDOPAG | Blog",
  description: "Blog Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-gray-50 dark:bg-gray-900">
        <Providers>
          <BlogNavbar />
          <div className="max-w-screen-xl mx-auto">{children}</div>
          <BlogFooter />
        </Providers>
      </body>
    </html>
  );
}
