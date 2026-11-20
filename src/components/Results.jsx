export default function Results({ tip, total, perPerson, people }) {
  return (
    <div className="results">
      <p><span>Tip</span><strong>{tip.toFixed(2)}</strong></p>
<p><span>Total</span><strong>{total.toFixed(2)}</strong></p>
{people > 1 && (
  <p><span>Each person pays</span><strong>{perPerson.toFixed(2)}</strong></p>
)}
    </div>
  );
}