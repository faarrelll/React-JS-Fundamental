import { createContext } from "react";

// noop, no operation, function kosong biasa untuk default
const noop = () => {};

const themeDefaultValue = {
  isDarkMode: true,
  darkThemeHandler: noop,
  lightThemeHandler: noop,
};

export const ThemeContext = createContext(themeDefaultValue);
