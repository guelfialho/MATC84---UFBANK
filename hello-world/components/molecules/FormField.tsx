import React from "react";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";

type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
};

export const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
}: FormFieldProps) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} placeholder={placeholder} />
  </div>
);
