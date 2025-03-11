import React, { useContext } from "react";
import ChildComponent from "./ChildComponent";
import ThirdChildComponent from "./ThirdChildComponent";
import PropTypes from "prop-types";
import { ThemeContext } from "./contexts/ThemeContext";
import ThirdChildClassComponent from "./ThirdChildClassComponent";

const SecondChildComponent = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <ChildComponent
      isDarkMode={themeContext.isDarkMode}
      bgColorClass="bg-emerald-200"
      darkBgColorClass="bg-emerald-600"
      nestingLevel={2}
      widthClass="min-w-[400px]"
      heightClass="min-h-[400px]"
    >
      {/* Tidak Pakai Props lagi */}
      <ThirdChildComponent />

      <ThirdChildClassComponent />
    </ChildComponent>
  );
};

SecondChildComponent.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  lightThemeHandler: PropTypes.func.isRequired,
  darkThemeHandler: PropTypes.func.isRequired,
};

export default SecondChildComponent;
