import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";

interface Props {
  label: string;
  name: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormField({ label, name, type, onChange }: Props) {
  return (
    <div>
      <Label text={label} />
      <Input name={name} type={type} onChange={onChange} />
    </div>
  );
}
