import React, { useContext } from "react";
import ChildComponent from "./ChildComponent";
import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";
import { ThemeContext } from "./contexts/ThemeContext";

const ThirdChildComponent = (props) => {
  const themeContext = useContext(ThemeContext);
  // console.log("themeContext", themeContext);

  // object destructuring object ThemeContext sama seperti props
  // kalau manual tanpa destructuing yaitu themeContext.isDarkMode
  const { isDarkMode, lightThemeHandler, darkThemeHandler } = themeContext;

  return (
    <ChildComponent
      isDarkMode={isDarkMode}
      bgColorClass="bg-red-200"
      darkBgColorClass="bg-red-600"
      nestingLevel={3}
      size={300}
      widthClass="min-w-[300px]"
      heightClass="min-h-[300px]"
    >
      <>
        <Button color="warning" onPress={lightThemeHandler}>
          Change To Light
        </Button>
        <Button color="primary" onPress={darkThemeHandler}>
          Change To Dark
        </Button>
      </>
    </ChildComponent>
  );
};

ThirdChildComponent.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  lightThemeHandler: PropTypes.func.isRequired,
  darkThemeHandler: PropTypes.func.isRequired,
};

export default ThirdChildComponent;
