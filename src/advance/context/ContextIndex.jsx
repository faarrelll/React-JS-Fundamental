import { useState } from "react";
import CenterContainer from "../components/CenterContainer";
import FirstChildComponent from "./FirstChildComponent";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

import "../internationalization/i18n";

import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const ContextIndex = () => {
  const { t, i18n } = useTranslation();
  // Lebih clean karena theme state dipindahkan ke ThemeContextProvider
  // bandingkan dengan src/advance/context/ContextIndexNotClean.jsx
  return (
    <CenterContainer>
      <ThemeContextProvider>
        <div
          className={`flex flex-col bg-amber-100 min-h-[600px] min-w-[600px] justify-center items-center`}
        >
          <h1>{t("welcome-to-react-key")}</h1>
          <Button
            color="primary"
            onPress={() => {
              i18n.changeLanguage("en");
            }}
          >
            Change to English
          </Button>
          <Button
            color="secondary"
            onPress={() => {
              i18n.changeLanguage("id");
            }}
          >
            Ubah ke Bahasa Indonesia
          </Button>
          <FirstChildComponent />
        </div>
      </ThemeContextProvider>
    </CenterContainer>
  );
};

export default ContextIndex;
