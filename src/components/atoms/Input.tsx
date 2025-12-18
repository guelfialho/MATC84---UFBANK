interface Props {
  type?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type = "text", name, onChange }: Props) {
  return <input type={type} name={name} onChange={onChange} />;
}
