import { calculator } from "./utils/Calculator";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [value, setValue] = useState({ sign: "*" });

  function getResult() {
    switch (value["sign"]) {
      case "*":
        setResult(
          calculator.multiply(
            value["calculator__first-number"],
            value["calculator__second-number"]
          )
        );
        break;
      case "+":
        setResult(
          calculator.add(
            value["calculator__first-number"],
            value["calculator__second-number"]
          )
        );
        break;
      case "/":
        setResult(
          calculator.divide(
            value["calculator__first-number"],
            value["calculator__second-number"]
          )
        );
        break;
      case "-":
        setResult(
          calculator.subtract(
            value["calculator__first-number"],
            value["calculator__second-number"]
          )
        );
        break;
      default:
    }
  }

  function changeValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <div className="calculator">
      <input
        type="text"
        onChange={changeValue}
        name="calculator__first-number"
        className="calculator__number"
        value={value["calculator__first-number"]}
      />
      <select
        name="sign"
        id="sign"
        className="calculator__sign" 
        onChange={changeValue}
        value={value["sign"]}
      >
        <option value={"+"}>
          +
        </option>
        <option value={"-"}>
          -
        </option>
        <option value={"*"}>
          *
        </option>
        <option value={"/"}>
          /
        </option>
      </select>
      <input
        type="text"
        onChange={changeValue}
        name="calculator__second-number"
        className="calculator__number"
        value={value["calculator__second-number"]}
      />
      <span className="calculator__sign-equal">=</span>
      <span className="calculator__result">{result}</span>
      <button
        onClick={() => getResult()}
        className="calculator__calculate-result"
      >
        Посчитать
      </button>
    </div>
  );
}

export default App;
