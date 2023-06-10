import Link from "next/link";
import Social from "@/components/ui/icons/Social";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row align-middle">
        <Link href="/" className="flex gap-2 items-center">
          <span className="sr-only">Company Logo</span>
          <Logo />
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
