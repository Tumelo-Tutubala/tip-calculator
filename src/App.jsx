import { useState } from "react";
import NumberField from "./components/NumberField";
import Results from "./components/Results";
import { TipSelect } from "./components/TipSelect";
import  "./App.css"

export default function App() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState(5);
  const [people, setPeople] = useState(1);

  const billAmount = Number(bill) || 0;
  const tip = billAmount * (tipPercent / 100);
  const total = billAmount + tip;
  const peopleCount = Math.max(1, Number(people) || 1);
  const perPerson = total / peopleCount;

  return (
    <div className="app">
      <h1>Tip Calculator</h1>

      <NumberField
        label="Bill amount:"
        value={bill}
        onChange={setBill}
        placeholder="0.00"
      />
      <TipSelect
        label="Tip:"
        value={tipPercent}
        onChange={setTipPercent}
      />
     
      <NumberField
        label="People:"
        value={people}
        onChange={setPeople}
        min="1"
      />

      <Results
        tip={tip}
        total={total}
        perPerson={perPerson}
        people={peopleCount}
      />
    </div>
  );
}