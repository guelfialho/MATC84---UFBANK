import { Label } from "../atoms/Label";
import { Select } from "../atoms/Select";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export function SelectField({ label, name, value, onChange, children }: Props) {
  return (
    <div>
      <Label text={label} />
      <Select name={name} value={value} onChange={onChange}>
        {children}
      </Select>
    </div>
  );
}
