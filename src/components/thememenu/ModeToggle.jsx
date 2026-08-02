import React, { useEffect, useState } from "react";
import "./thememenu.css";
import { DEFAULT_THEME, THEME_EVENT, MODE_STORAGE_KEY } from "./themes";

const getSystemMode = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";

const applyMode = (mode) => {
  document.documentElement.setAttribute("data-mode", mode);
  const activeTheme = document.documentElement.getAttribute("data-theme");
  if (!activeTheme) {
    const bodyColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--body-color")
      .trim();
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta && bodyColor) meta.setAttribute("content", bodyColor);
  }
};

const ModeToggle = () => {
  const [mode, setMode] = useState("dark");
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(MODE_STORAGE_KEY);
    const initial = saved || getSystemMode();
    setMode(initial);
    applyMode(initial);

    const activeTheme = document.documentElement.getAttribute("data-theme");
    setLocked(Boolean(activeTheme) && activeTheme !== DEFAULT_THEME);

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onSystemChange = (e) => {
      if (localStorage.getItem(MODE_STORAGE_KEY)) return;
      const next = e.matches ? "light" : "dark";
      setMode(next);
      applyMode(next);
    };
    mq.addEventListener("change", onSystemChange);

    const onThemeChange = (e) => {
      setLocked(e.detail !== DEFAULT_THEME);
    };
    window.addEventListener(THEME_EVENT, onThemeChange);

    return () => {
      mq.removeEventListener("change", onSystemChange);
      window.removeEventListener(THEME_EVENT, onThemeChange);
    };
  }, []);

  const handleToggle = () => {
    if (locked) return;
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    applyMode(next);
    localStorage.setItem(MODE_STORAGE_KEY, next);
  };

  return (
    <button
      className={locked ? "mode-toggle locked" : "mode-toggle"}
      onClick={handleToggle}
      aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={
        locked
          ? "Light/dark mode only applies to the Obsidian Minimal default theme"
          : mode === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      <i className={mode === "dark" ? "bx bx-moon" : "bx bx-sun"}></i>
    </button>
  );
};

export default ModeToggle;
