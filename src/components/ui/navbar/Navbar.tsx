import Link from "next/link";

import DarkModeButton from "@/components/ui/buttons/DarkModeButton";
import Social from "@/components/ui/icons/Social";
import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <>
      <nav className="flex w-full items-center justify-between p-4 lg:px-4 fixed z-10 bg-white dark:bg-slate-900 shadow-sm dark:shadow-md ">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex gap-2 items-center">
            <span className="sr-only">Company Logo</span>
            <Logo />
          </Link>
        </div>
        <div className="flex gap-6">
          <DarkModeButton />
          <Social />
        </div>
      </nav>
    </>
  );
}
