interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return <div>{title}</div>;
}
