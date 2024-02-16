import Typography from ".";

interface TextNdSupportProps {
  text: string;
  support: string;
  className?: string;
}

export default function TextNdSupport({
  text,
  support,
  className,
}: TextNdSupportProps) {
  return (
    <div className={"flex flex-col gap-1 " + className}>
      <Typography variant="text">{text}</Typography>
      <Typography variant="support">{support}</Typography>
    </div>
  );
}
