"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { SunMedium, Moon } from "lucide-react";
import React from "react";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <SunMedium
          size={20}
          className="rotate-0 scale-100 translate-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          size={20}
          className="absolute rotate-90 scale-0 translate-all dark:-rotate-0 dark:scale-100"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default ToggleTheme;
