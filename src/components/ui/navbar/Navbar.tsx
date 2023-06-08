"use client";

import Image from "next/image";
import Link from "next/link";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import DarkModeButton from "@/components/ui/buttons/DarkModeButton";

export default function Navbar() {
  const navItems = [
    { link: "home" },
    { link: "about" },
    { link: "services" },
    { link: "projects" },
    { link: "blog" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex w-full items-center justify-between p-4 lg:px-4 fixed z-10 bg-white dark:bg-gray-800 shadow-sm backdrop-blur-lg">
        <div className="flex lg:flex-1">
          <Link href="#" className="flex gap-2 items-center">
            <span className="sr-only">Company Logo</span>
            <Image
              src="assets/logo/logo_black.svg"
              width={30}
              height={30}
              alt="logo"
              className="dark:hidden block"
            />
            <Image
              src="assets/logo/logo_white.svg"
              width={30}
              height={30}
              alt="logo"
              className="hidden dark:block"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 dark:text-gray-50"
              aria-hidden="true"
            />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={`#${item.link}`}
              className="dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-50 dark:hover:border-b-gray-50 hover:border-b capitalize hover:border-b-gray-500 transition duration-700 ease-in-out font-light text-sm"
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="assets/logo/logo_black.svg"
                width={30}
                height={30}
                alt="logo"
                className="dark:hidden block"
              />
              <Image
                src="assets/logo/logo_white.svg"
                width={30}
                height={30}
                alt="logo"
                className="hidden dark:block"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
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
                    href={`#${item.link}`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-50 dark:hover:text-gray-300 capitalize"
                  >
                    {item.link}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
