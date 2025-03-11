import React from "react";
import CenterContainer from "../components/CenterContainer";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import MemoizationDemo from "./MemoizationDemo";
import UseReducerDemo from "./UseReducerDemo";
import UseCallbackDemo from "./UseCallbackDemo";
import UseEffectDemo from "./UseEffectDemo";

const getElementByKey = (key) => {
  switch (key) {
    case "useMemo":
      return <MemoizationDemo />;
    case "useReducer":
      return <UseReducerDemo />;
    case "useCallback":
      return <UseCallbackDemo />;
    case "useEffect":
      return <UseEffectDemo />;
    default:
      return <MemoizationDemo />;
  }
};

const HooksV2Index = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["useEffect"])
  );

  const selectedValue = Array.from(selectedKeys)[0];

  return (
    <CenterContainer>
      <h1 className="text-3xl">Hooks Demo</h1>
      <Dropdown>
        <DropdownTrigger>
          <Button className="capitalize" variant="bordered">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Single selection example"
          selectedKeys={selectedKeys}
          selectionMode="single"
          variant="flat"
          onSelectionChange={setSelectedKeys}
        >
          <DropdownItem key="useMemo">useMemo</DropdownItem>
          <DropdownItem key="useReducer">useReducer</DropdownItem>
          <DropdownItem key="useCallback">useCallback</DropdownItem>
          <DropdownItem key="useEffect">useEffect</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* CONTENT */}
      <div className="flex flex-col">{getElementByKey(selectedValue)}</div>
    </CenterContainer>
  );
};

export default HooksV2Index;
