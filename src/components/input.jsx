import React, { Component } from "react";
const input = props => {
  const style = {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    borderColor: "red"
  };
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input {...props} />;
      break;
    case "textarea":
      inputElement = <input {...props} />;
    default:
      inputElement = <input {...props} />;
      break;
  }
  return (
    <div style={style}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
