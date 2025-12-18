interface Props {
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type = "text", name, value, onChange }: Props) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
