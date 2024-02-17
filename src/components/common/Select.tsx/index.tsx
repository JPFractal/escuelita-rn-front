import { v4 } from "uuid";
import Typography from "../Typography";
import FormControl from "../FormControl";
import {
  INPUT_STYLE_ERROR,
  INPUT_STYLE_NORMAL,
} from "@/constraints/Styles/form-control";

interface SelectProps {
  label?: string;
  fullwidth?: boolean;
  className?: string;
  classNameSelect?: string;
  placeholder?: string;
  error?: boolean;
  options?: any[];
  value?: string;
  defaultValue?: string;
}

export default function Select({
  label,
  fullwidth = false,
  className = "",
  classNameSelect = "",
  placeholder,
  error = false,
  options = [],
  value,
  defaultValue,
}: SelectProps) {
  return (
    <FormControl {...{ label, fullwidth, className }}>
      <select
        className={`${
          error ? INPUT_STYLE_ERROR : INPUT_STYLE_NORMAL
        } ${classNameSelect}`}
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
