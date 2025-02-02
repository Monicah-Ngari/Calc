import "./Calculator .css";
import Calcbutton from "./Calcbutton";

function Calculator() {
  return (
    <div className="Calculator">
      <div className="container">
        <div>
          <Calcbutton className="display" value={0} />
        </div>
        <div>
          <Calcbutton value={7} />
          <Calcbutton value={8} />
          <Calcbutton value={9} />
          <Calcbutton className="operator" value={"Del"} />
        </div>
        <div>
          <Calcbutton value={4} />
          <Calcbutton value={5} />
          <Calcbutton value={6} />
          <Calcbutton className="operator" value={"*"} />
        </div>
        <div>
          <Calcbutton value={1} />
          <Calcbutton value={2} />
          <Calcbutton value={3} />
          <Calcbutton className="operator" value={"+"} />
        </div>
        <div>
          <Calcbutton value={"-"} />
          <Calcbutton value={0} />
          <Calcbutton value={"%"} />
          <Calcbutton className="operator" value={"="} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
