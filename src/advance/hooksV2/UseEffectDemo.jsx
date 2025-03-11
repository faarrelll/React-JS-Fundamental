import React from "react";
import CenterContainer from "../components/CenterContainer";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import FetchBackendDemo from "./components/useEffectDemoComponents/FetchBackendDemo";
import FetchPaginationDemo from "./components/useEffectDemoComponents/FetchPaginationDemo";

const getElementByKey = (key) => {
  switch (key) {
    case "fetchBackendEndpointAPI":
      return <FetchBackendDemo />;
    case "fetchPaginationDemo":
      return <FetchPaginationDemo />;
    default:
      return <FetchPaginationDemo />;
  }
};

const UseEffectDemo = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["fetchPaginationDemo"])
  );

  const selectedValue = Array.from(selectedKeys)[0];
  return (
    <CenterContainer>
      <div className="flex flex-col min-w-[700px] min-h-[700px] bg-teal-300">
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
            <DropdownItem key="fetchBackendEndpointAPI">
              Fetch Backend Endpoint (API)
            </DropdownItem>
            <DropdownItem key="fetchPaginationDemo">
              Fetch Backend Endpoint with Pagination and Search (API)
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {getElementByKey(selectedKeys)}
      </div>
    </CenterContainer>
  );
};

export default UseEffectDemo;
