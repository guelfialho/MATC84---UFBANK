import React from "react";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};
