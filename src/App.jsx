import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState(10);
  const [people, setPeople] = useState(1);

//calculations
  const billAmount = Number(bill) || 0;
  const tip = billAmount * (tipPercent / 100);
  const total = billAmount + tip;
  const peopleCount = Math.max(1, Number(people) || 1);
  const perPerson = total / peopleCount;

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
  People:
  <input
    type="number"
    min="1"
    value={people}
    onChange={(e) => setPeople(e.target.value)}
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

 <p>Tip: {tip.toFixed(2)}</p>
<p>Total: {total.toFixed(2)}</p>
<p>Each person pays: {perPerson.toFixed(2)}</p>
    </div>
  );
}