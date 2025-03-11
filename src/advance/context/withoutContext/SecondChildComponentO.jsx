import React from "react";
import ChildComponent from "./ChildComponent";
import ThirdChildComponent from "./ThirdChildComponentO";
import PropTypes from "prop-types";

const SecondChildComponent = ({ isDarkMode, ...restProps }) => {
  return (
    <ChildComponent
      isDarkMode={isDarkMode}
      bgColorClass="bg-emerald-200"
      darkBgColorClass="bg-emerald-600"
      nestingLevel={2}
      widthClass="min-w-[400px]"
      heightClass="min-h-[400px]"
    >
      {/* Props Drilling Ketiga */}
      <ThirdChildComp
      onent isDarkMode={isDarkMode} {...restProps} />
    </ChildComponent>
  );
};

SecondChildComponent.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  lightThemeHandler: PropTypes.func.isRequired,
  darkThemeHandler: PropTypes.func.isRequired,
};

export default SecondChildComponent;
