import "./App.css";
import Calcbutton from "./Calcbutton";

function Calculator(props) {
  return (
    <div className="Calculator">
      <div className="container">
        <div>
          <Calcbutton value={7} />
          <Calcbutton value={8}/>
          <Calcbutton value={9}/>
          <Calcbutton value={del}/>
        </div>
        <div>
          <Calcbutton value={4} />
          <Calcbutton value={5}/>
          <Calcbutton value={6} />
          <Calcbutton value={*} />
        </div>
        <div>
          <Calcbutton value={1} />
          <Calcbutton value={2} />
          <Calcbutton value={3} />
          <Calcbutton value={+} />
        </div>
        <div>
          <Calcbutton value={-} />
          <Calcbutton value={0} />
          <Calcbutton value={%}/>
          <Calcbutton value ={=} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
