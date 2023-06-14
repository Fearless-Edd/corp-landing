"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function StudioLogo() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div class="flex items-center">
      {currentTheme === "dark" ? (
        <Image
          src="assets/logo/studio_logo_white.svg"
          width={50}
          height={20}
          alt="logo"
          priority={true}
        />
      ) : (
        <Image
          src="assets/logo/studio_logo_black.svg"
          width={50}
          height={20}
          alt="logo"
          priority={true}
        />
      )}
    </div>
  );
}
