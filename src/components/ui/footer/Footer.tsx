import Image from "next/image";
import Link from "next/link";
import Social from "@/components/ui/icons/Social";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row align-middle">
        <Link href="/" className="flex gap-2 items-center">
          <span className="sr-only">Company Logo</span>
          <Image
            src="assets/logo/logo_black.svg"
            width={20}
            height={20}
            alt="logo"
            className="dark:hidden block"
          />
          <Image
            src="assets/logo/logo_white.svg"
            width={20}
            height={20}
            alt="logo"
            className="hidden dark:block"
          />
        </Link>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <div className="flex -mx-2">
          <Social />
        </div>
      </div>
    </footer>
  );
}
