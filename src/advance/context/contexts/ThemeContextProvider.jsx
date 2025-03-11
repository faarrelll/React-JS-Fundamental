import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import PropTypes from "prop-types";

const ThemeContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const darkThemeHandler = () => {
    setIsDarkMode(true);
  };

  const lightThemeHandler = () => {
    setIsDarkMode(false);
  };
  return (
    <ThemeContext.Provider
      value={{ isDarkMode, darkThemeHandler, lightThemeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeContextProvider;
