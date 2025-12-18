interface Props {
  name: string;
  value: string;
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({ name, value, children, onChange }: Props) {
  return (
    <select name={name} value={value} onChange={onChange}>
      {children}
    </select>
  );
}
