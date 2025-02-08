"use client";

import { Sun, Moon } from "lucide-react";

import { useTheme } from "@/store/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all bg-gray-200 dark:bg-gray-700"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
