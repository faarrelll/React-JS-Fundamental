import React from "react";

const CenterContainer = ({ children }) => {
  return (
    <div className="flex flex-1 justify-center items-center flex-col border-2 border-blue-700 p-10">
      {children}
    </div>
  );
};

export default CenterContainer;
