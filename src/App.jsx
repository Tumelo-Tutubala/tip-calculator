import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState(10);

  return (
    <div className="app">
      <h1>Tip Calculator</h1>

      <label>
        Bill amount:
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="0.00"
        />
      </label>

      <label>
        Tip:
        <select
          value={tipPercent}
          onChange={(e) => setTipPercent(Number(e.target.value))}
        >
          <option value={5}>5%</option>
          <option value={10}>10%</option>
          <option value={15}>15%</option>
          <option value={20}>20%</option>
        </select>
      </label>

      <p>You typed: {bill}</p>
      <p>Tip percent is: {tipPercent}</p>
    </div>
  );
}