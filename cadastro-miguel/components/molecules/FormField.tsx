"use client";

import { Input } from "../atoms/Input";

interface FormFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

export function FormField({
  label,
  type = "text",
  name,
  placeholder,
  required,
}: FormFieldProps) {
  return (
    <Input
      label={label}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
}
