import { useState } from "react";
import CenterContainer from "../components/CenterContainer";
import FirstChildComponent from "./FirstChildComponent";
import { ThemeContext } from "./contexts/ThemeContext";

const ContextIndex = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const darkThemeHandler = () => {
    setIsDarkMode(true);
  };

  const lightThemeHandler = () => {
    setIsDarkMode(false);
  };

  return (
    <CenterContainer>
      <ThemeContext.Provider
        value={{ isDarkMode, darkThemeHandler, lightThemeHandler }}
      >
        <div
          className={`flex bg-amber-100 min-h-[600px] min-w-[600px] justify-center items-center`}
        >
          <FirstChildComponent />
        </div>
      </ThemeContext.Provider>
    </CenterContainer>
  );
};

export default ContextIndex;
