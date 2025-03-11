import React, { useContext } from "react";
import ChildComponent from "./ChildComponent";
import SecondChildComponent from "./SecondChildComponent";
import PropTypes from "prop-types";
import { ThemeContext } from "./contexts/ThemeContext";

const FirstChildComponent = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <ChildComponent
      // karena cuma satu bisa juga tanpa destructuring, seperti dibawah ini
      isDarkMode={themeContext.isDarkMode}
      bgColorClass="bg-lime-200"
      darkBgColorClass="bg-lime-700"
      nestingLevel={1}
      widthClass="min-w-[500px]"
      heightClass="min-h-[500px]"
    >
      {/* gak pakai props lagi */}
      <SecondChildComponent />
    </ChildComponent>
  );
};

FirstChildComponent.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  lightThemeHandler: PropTypes.func.isRequired,
  darkThemeHandler: PropTypes.func.isRequired,
};

export default FirstChildComponent;
