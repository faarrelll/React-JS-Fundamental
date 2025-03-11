import React from "react";

// dibawah adalah langsung destruct props
// const ButtonProps = ({ buttonName, onButtonClick }) => {
const ButtonProps = (props) => {
  const { buttonName, onButtonClick } = props;
  return (
    <button style={style} onClick={props.onButtonClick}>
      {props.buttonName}
    </button>
  );
};

const style = {
  backgroundColor: "yellow",
  borderRadius: "10px",
};

export default ButtonProps;
