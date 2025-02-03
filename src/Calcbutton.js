import React from "react";

function Calcbutton(props) {
  return (
    <button onClick={() => props.onClick(props.value)}>{props.value}</button>
  );
}

export default Calcbutton;
