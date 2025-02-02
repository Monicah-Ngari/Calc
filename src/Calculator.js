import React, { useState } from "react";
import "./Calculator.css";
import Calcbutton from "./Calcbutton";

function Calculator() {
  const [display, setDisplay] = useState("0");

  function handleValue(value) {
    setDisplay((prev) =>
      prev === "0" ? value.toString() : prev + value.toString()
    );
  }
  function hanldleOperator(operator) {
    setDisplay((prev) => prev + " " + operator + " ");
  }
  function handleClear() {
    setDisplay("0");
  }
  return (
    <div className="Calculator">
      <div className="Calculator-container">
        <div className="Calculator-display">{display}</div>

        <Calcbutton value={7} onClick={handleValue} />
        <Calcbutton value={8} onClick={handleValue} />
        <Calcbutton value={9} onClick={handleValue} />
        <Calcbutton className="operator" value={"Del"} onClick={handleClear} />

        <Calcbutton value={4} onClick={handleValue} />
        <Calcbutton value={5} onClick={handleValue} />
        <Calcbutton value={6} onClick={handleValue} />
        <Calcbutton
          className="operator"
          value={"*"}
          onClick={hanldleOperator}
        />

        <Calcbutton value={1} onClick={handleValue} />
        <Calcbutton value={2} onClick={handleValue} />
        <Calcbutton value={3} onClick={handleValue} />
        <Calcbutton
          className="operator"
          value={"+"}
          onClick={hanldleOperator}
        />

        <Calcbutton value={"-"} onClick={hanldleOperator} />
        <Calcbutton value={0} onClick={handleValue} />
        <Calcbutton value={"%"} onClick={hanldleOperator} />
        <Calcbutton
          className="operator"
          value={"="}
          onClick={hanldleOperator}
        />
      </div>
    </div>
  );
}

export default Calculator;
