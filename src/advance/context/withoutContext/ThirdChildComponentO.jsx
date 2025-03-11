import React from "react";
import ChildComponent from "./ChildComponent";
import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

const ThirdChildComponent = ({
  isDarkMode,
  lightThemeHandler,
  darkThemeHandler,
}) => {
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
