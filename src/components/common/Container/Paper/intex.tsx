export default function Paper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"p-8 bg-white-0 rounded-lg shadow-md " + className}>
      {children}
    </div>
  );
}
