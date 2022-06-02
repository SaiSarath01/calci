import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Calculation />
    </div>
  );
}

const Calculation = () => {
  const [x, setX] = useState<number>();
  const [y, setY] = useState<number>();
  const addition = (a: number, b: number) => {
    return a + b;
  };
  return (
    <div>
      <div className="fields">
        <input
          type="number"
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
        />
        <input
          type="number"
          value={y}
          onChange={(e) => setY(Number(e.target.value))}
        />
      </div>
      <div className="result">
        <h4>Result</h4>
        {x! !== 0 && y! !== 0 ? <>{addition(x!, y!)}</> : <>0</>}
      </div>
    </div>
  );
};

export default App;
