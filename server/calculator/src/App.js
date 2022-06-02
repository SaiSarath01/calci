import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Calculation></Calculation>
    </div>
  );
}

const Calculation = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const addition = (a, b) => {
    return a + b;
  };
  return (
    <div>
      <div className="fields">
        <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
        <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
      </div>
      <div className="result">
        <h4>Result</h4>
        {addition(x, y)}
      </div>
    </div>
  );
};

export default App;
