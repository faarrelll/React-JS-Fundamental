import React, { useEffect, useState } from "react";

import "./StatefulComponent.styles.css";

const StatefulComponent = (props) => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [title, setTitle] = useState(props.title);

  useEffect(() => {}, []);

  const buttonClickHandler = () => {
    setTitle("Stateful");
  };

  console.log("switchChecked", switchChecked);

  return (
    <div>
      <h1>
        Representasi Data Visual (Hanya meneruskan data dari props, tidak
        memiliki State internal)
      </h1>
      {props.header}
      <button onClick={buttonClickHandler}>
        Click to change Title to Stateful
      </button>
      <h1>{title}</h1>

      <label className="switch">
        {/* berubah secara natural dari html dan css (uncontrolled component) */}
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>

      <label className="switch">
        {/* berubah dengan dikontrol oleh state react (controlled component) */}
        <input
          type="checkbox"
          onClick={() => {
            setSwitchChecked(!switchChecked);
          }}
          checked={switchChecked}
        />
        <span className="slider round"></span>
      </label>

      <p>{props.content}</p>
      {props.renderFooter}
    </div>
  );
};

export default StatefulComponent;
