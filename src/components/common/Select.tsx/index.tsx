import { v4 } from "uuid";
import Typography from "../Typography";
import FormControl from "../FormControl";

export default function Select({
  label,
  fullwidth = false,
  className = "",
  placeholder,
  error = false,
  options = [],
  value,
  defaultValue,
}: any) {
  return (
    <FormControl {...{ label, fullwidth, className }}>
      <select
        className={`p-2.5 rounded-lg border focus:outline outline-4 ${
          error
            ? "border-red-0 outline-red-10/30 text-red-10 placeholder-red-10/60"
            : "border-gray-30 outline-sky-10/30"
        } w-full`}
        {...(value ? { value } : { defaultValue })}
      >
        <option>{placeholder}</option>
        {options.map((option: any) => (
          <option key={v4()} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormControl>
  );
}
