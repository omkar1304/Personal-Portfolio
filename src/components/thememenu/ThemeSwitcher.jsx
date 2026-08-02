import React, { useEffect, useState } from "react";
import "./thememenu.css";
import { themeList, DEFAULT_THEME, STORAGE_KEY, THEME_EVENT } from "./themes";

// The 9 non-default showcase themes are dark-only: setting [data-theme]
// forces the dark palette regardless of the light/dark mode toggle.
// Selecting "Obsidian Minimal" (the default) clears the attribute so the
// mode toggle regains control of the base light/dark palette.
export const applyTheme = (id) => {
  if (id === DEFAULT_THEME) {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", id);
  }
  const bodyColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--body-color")
    .trim();
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta && bodyColor) meta.setAttribute("content", bodyColor);
  window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: id }));
};

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    setActiveTheme(saved);
    applyTheme(saved);
  }, []);

  const handleSelect = (id) => {
    setActiveTheme(id);
    applyTheme(id);
    localStorage.setItem(STORAGE_KEY, id);
  };

  return (
    <div className="theme-switcher-inner">
      <button
        className="theme-switcher__toggle"
        onClick={() => setOpen(!open)}
        aria-label="Choose a theme"
        aria-expanded={open}
      >
        <i className="bx bxs-palette"></i>
        <span>Themes</span>
      </button>

      <div className={open ? "theme-switcher__panel show" : "theme-switcher__panel"}>
        <div className="theme-switcher__header">
          <span>10 theme concepts</span>
          <button
            className="theme-switcher__close"
            onClick={() => setOpen(false)}
            aria-label="Close theme picker"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        <div className="theme-switcher__list">
          {themeList.map((theme) => (
            <button
              key={theme.id}
              className={
                theme.id === activeTheme
                  ? "theme-switcher__item active"
                  : "theme-switcher__item"
              }
              onClick={() => handleSelect(theme.id)}
            >
              <span className="theme-switcher__swatches">
                {theme.swatches.map((c, i) => (
                  <span
                    key={i}
                    className="theme-switcher__dot"
                    style={{ backgroundColor: c }}
                  ></span>
                ))}
              </span>

              <span className="theme-switcher__meta">
                <span className="theme-switcher__name">{theme.name}</span>
                <span className="theme-switcher__tagline">{theme.tagline}</span>
                <span className="theme-switcher__fonts">{theme.fonts}</span>
              </span>

              {theme.id === activeTheme && (
                <i className="bx bx-check theme-switcher__check"></i>
              )}
            </button>
          ))}
        </div>

        <div className="theme-switcher__footer">
          Light / dark mode is available on <strong>Obsidian Minimal</strong>,
          the default theme — the other 9 are dark-only design concepts.
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
