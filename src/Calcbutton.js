import React from "react";

function Calcbutton(props) {
  return (
    <div>
      <button onClick={() => props.value}>{props.value} </button>
    </div>
  );
}

export default Calcbutton;
