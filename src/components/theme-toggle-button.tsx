"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MoonIcon from "./moon-icon";
import SunIcon from "./sun-icon";

export default function ThemeToggleButton() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isDarkMode = resolvedTheme === "dark";

  const handleClickButton = (): void => {
    const nextTheme = isDarkMode ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleClickButton}
      className="rounded p-3 text-indigo-500 hover:bg-stone-200 dark:hover:bg-stone-800"
    >
      {isDarkMode ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
}
