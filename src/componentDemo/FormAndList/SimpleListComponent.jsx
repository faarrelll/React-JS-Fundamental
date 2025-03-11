import React from "react";

const noopFunc = () => {};

// = adalah untuk default value
const SimpleListComponent = ({ data = [], onDeleteItem = noopFunc }) => {
  return (
    <div>
      {data.map((dataItem) => {
        return (
          <li key={dataItem.id}>
            {dataItem.name}
            <button onClick={onDeleteItem(dataItem.id)}>DELETE ITEM</button>
          </li>
        );
      })}
    </div>
  );
};

export default SimpleListComponent;
