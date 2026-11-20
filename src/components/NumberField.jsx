export default function NumberField({ label, value, onChange, placeholder, min }) {
  return (
    <label>
      {label}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
      />
    </label>
  );
}