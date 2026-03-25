import { useState } from "react";

type Props = {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

function InputField({ label, type, value, onChange, required }: Props) {
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (required && !value) {
      setError(`${label} is required`);
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label>{label}</label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default InputField;