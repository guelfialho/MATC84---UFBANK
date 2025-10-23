import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}) => (
  <div className="flex flex-col gap-1">
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} type={type} value={value} onChange={onChange} error={error} />
  </div>
);
