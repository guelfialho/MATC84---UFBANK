interface Props {
  text: string;
}

export function Button({ text }: Props) {
  return <button type="submit">{text}</button>;
}
