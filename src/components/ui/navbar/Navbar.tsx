"use client";

import Link from "next/link";
import { useState } from "react";

import { Dialog, Popover } from "@headlessui/react";
import { CgMenuGridR, CgClose } from "react-icons/cg";

import DarkModeButton from "@/components/ui/buttons/DarkModeButton";
import Social from "@/components/ui/icons/Social";
import Logo from "@/components/Logo";

export default function Navbar() {
  const navItems = [
    { link: "home", href: "/" },
    { link: "about", href: "#about" },
    { link: "services", href: "#services" },
    { link: "projects", href: "#projects" },
    { link: "blog", href: "#blog" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex w-full items-center justify-between p-4 lg:px-4 fixed z-10 bg-white dark:bg-slate-900 shadow-sm dark:shadow-md ">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex gap-2 items-center">
            <span className="sr-only">Company Logo</span>
            <Logo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <CgMenuGridR
              className="h-6 w-6 dark:text-gray-50"
              aria-hidden="true"
            />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.href}
              scroll={false}
              className={`dark:text-gray-50 hover:text-gray-900 capitalize font-light text-sm bg-transparent border-b-2 border-white focus:outline-none dark:border-slate-900 dark:hover:border-gray-400 hover:border-gray-400 whitespace-nowrap cursor-base h-10 px-2 py-2`}
            >
              {item.link}
            </Link>
          ))}
          <DarkModeButton />
          <Link
            href="#"
            className="bg-blue-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 px-3 py-1 font-light text-sm rounded dark:hover:bg-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 duration-300"
          >
            Admin
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <CgClose
                className="h-6 w-6 dark:text-gray-50"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.link}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-50 dark:hover:bg-gray-700 capitalize"
                  >
                    {item.link}
                  </Link>
                ))}
              </div>

              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Admin
                </Link>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center align-middle py-6">
              <Social />
              <DarkModeButton />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
