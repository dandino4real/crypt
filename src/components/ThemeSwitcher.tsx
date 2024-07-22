"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button, Tooltip } from "@nextui-org/react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Tooltip
      content={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      showArrow
    >
      <Button
        isIconOnly
        style={{
          backgroundColor: theme === "light" ? "#5275EC" : "#000",
          color: "#fff",
        }}
        onPress={toggleTheme}
        aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      >
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </Button>
    </Tooltip>
  );
}
