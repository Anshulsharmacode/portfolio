"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className='fixed right-5 top-5 z-50 rounded-full border border-border bg-card/90 p-2 shadow-lg backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-xl md:right-8 md:top-8'
      aria-label='Toggle theme'
    >
      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute top-2 left-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
    </button>
  );
}
