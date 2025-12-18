import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";

interface Props {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormField({ label, name, type, value, onChange }: Props) {
  return (
    <div>
      <Label text={label} />
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
