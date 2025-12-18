interface Props {
  text: string;
}

export function Label({ text }: Props) {
  return <label>{text}</label>;
}
