import React from "react";
import "./thememenu.css";
import ModeToggle from "./ModeToggle";
import ThemeSwitcher from "./ThemeSwitcher";

const ThemeControls = () => {
  return (
    <div className="theme-controls">
      <ModeToggle />
      <ThemeSwitcher />
    </div>
  );
};

export default ThemeControls;
