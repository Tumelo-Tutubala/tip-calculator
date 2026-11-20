import { useState } from "react";
import { useEffect } from "react";


fu


















export default function App() {
const [bill, setBill] = useState("");
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

      <p>You typed: {bill}</p>
    </div>
  );
}