import Typography from "../Typography";

export default function FormControl({
  label,
  fullwidth = false,
  className,
  children,
}: any) {
  return (
    <fieldset className={`${className} ${fullwidth && "w-full"}`}>
      <label className="flex flex-col gap-2">
        <Typography variant="text-2">{label}</Typography>
        {children}
      </label>
    </fieldset>
  );
}
