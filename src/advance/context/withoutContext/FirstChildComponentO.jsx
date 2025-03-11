import React from "react";
import ChildComponent from "./ChildComponent";
import SecondChildComponent from "./SecondChildComponentO";
import PropTypes from "prop-types";

const FirstChildComponent = (props) => {
  const { isDarkMode } = props;
  return (
    <ChildComponent
      isDarkMode={isDarkMode}
      bgColorClass="bg-lime-200"
      darkBgColorClass="bg-lime-700"
      nestingLevel={1}
      widthClass="min-w-[500px]"
      heightClass="min-h-[500px]"
    >
      {/* Props Drilling Kedua */}
      <SecondChildComponent isDarkMode={isDarkMode} {...props} />
    </ChildComponent>
  );
};

FirstChildComponent.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  lightThemeHandler: PropTypes.func.isRequired,
  darkThemeHandler: PropTypes.func.isRequired,
};

export default FirstChildComponent;
