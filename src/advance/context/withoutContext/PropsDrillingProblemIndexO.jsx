import React from "react";
import CenterContainer from "../../components/CenterContainer";
import ChildComponent from "./ChildComponent";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import FirstChildComponent from "./FirstChildComponentO";

const ContextIndex = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const darkThemeHandler = () => {
    setIsDarkMode(true);
  };

  const lightThemeHandler = () => {
    setIsDarkMode(false);
  };

  console.log("isDarkMode", isDarkMode);

  const themeProps = {
    isDarkMode,
    darkThemeHandler,
    lightThemeHandler,
  };

  return (
    <CenterContainer>
      <div
        className={`flex bg-amber-100 min-h-[600px] min-w-[600px] justify-center items-center`}
      >
        {/* Props Drilling Pertama */}
        <FirstChildComponent isDarkMode={isDarkMode} {...themeProps} />
      </div>
    </CenterContainer>
  );
};

export default ContextIndex;
