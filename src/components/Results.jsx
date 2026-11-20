export default function Results({ tip, total, perPerson, people }) {
  return (
    <div className="results">
      <p>Tip: {tip.toFixed(2)}</p>
      <p>Total: {total.toFixed(2)}</p>
      {people > 1 && <p>Each person pays: {perPerson.toFixed(2)}</p>}
    </div>
  );
}