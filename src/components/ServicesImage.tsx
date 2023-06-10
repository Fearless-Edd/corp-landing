"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Logo() {
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
    <div>
      {currentTheme === "dark" ? (
        <Image
          src="/assets/3d_character/white_hoodie_2.png"
          width={560}
          height={300}
          alt="hero"
        />
      ) : (
        <Image
          src="/assets/3d_character/black_hoodie_2.png"
          width={560}
          height={300}
          alt="hero"
        />
      )}
    </div>
  );
}
