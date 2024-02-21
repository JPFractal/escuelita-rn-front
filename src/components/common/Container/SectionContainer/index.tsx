import Typography from "../../Typography";

export default function SectionContainer({
  children,
  title = "Section title",
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="text" className="font-semibold">
        {title}
      </Typography>
      {children}
    </div>
  );
}
