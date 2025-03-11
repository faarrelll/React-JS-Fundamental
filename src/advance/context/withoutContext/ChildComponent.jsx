import React from "react";
import PropTypes from "prop-types";

// CONTOH STATELESS COMPONENT
const ChildComponent = (props) => {
  const {
    nestingLevel,
    children,
    bgColorClass,
    darkBgColorClass,
    heightClass,
    widthClass,
    isDarkMode,
  } = props;
  return (
    <div
      // TODO: Pakai Tailwin Merge bagusnya https://www.npmjs.com/package/tailwind-merge
      className={`flex flex-col items-center justify-center gap-3 ${
        isDarkMode ? darkBgColorClass : bgColorClass
      } ${heightClass} ${widthClass} `}
    >
      <h1>nestingLevel: {nestingLevel}</h1>
      {children}
    </div>
  );
};

// https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
// https://www.npmjs.com/package/prop-types
ChildComponent.propTypes = {
  bgColorClass: PropTypes.string.isRequired,
  darkBgColorClass: PropTypes.string.isRequired,
  heightClass: PropTypes.string.isRequired,
  widthClass: PropTypes.string.isRequired,
  nestingLevel: PropTypes.number.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

export default ChildComponent;
