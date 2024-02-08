import Typography from ".";

interface TextNdSupportProps {
  text: string;
  support: string;
}

export default function TextNdSupport({ text, support }: TextNdSupportProps) {
  return (
    <div className="flex flex-col gap-1">
      <Typography variant="text">{text}</Typography>
      <Typography variant="support">{support}</Typography>
    </div>
  );
}