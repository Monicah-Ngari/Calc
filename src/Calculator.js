import "./Calculator.css";
import Calcbutton from "./Calcbutton";

function Calculator() {
  function handleDisplay() {}
  function handleValue() {}
  return (
    <div className="Calculator">
      <div className="Calculator-container" onClick={handleDisplay}>
        <div className="Calculator-display">0 </div>

        <Calcbutton value={7} onClick={handleValue} />
        <Calcbutton value={8} onClick={handleValue} />
        <Calcbutton value={9} onClick={handleValue} />
        <Calcbutton className="operator" value={"Del"} />

        <Calcbutton value={4} onClick={handleValue} />
        <Calcbutton value={5} onClick={handleValue} />
        <Calcbutton value={6} onClick={handleValue} />
        <Calcbutton className="operator" value={"*"} />

        <Calcbutton value={1} onClick={handleValue} />
        <Calcbutton value={2} onClick={handleValue} />
        <Calcbutton value={3} onClick="handleValue{handleValue}" />
        <Calcbutton className="operator" value={"+"} />

        <Calcbutton value={"-"} />
        <Calcbutton value={0} onClick={handleValue} />
        <Calcbutton value={"%"} />
        <Calcbutton className="operator" value={"="} />
      </div>
    </div>
  );
}

export default Calculator;
