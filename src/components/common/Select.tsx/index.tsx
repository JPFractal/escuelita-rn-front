import Typography from "../Typography";
import FormControl from "../FormControl";
import {
  INPUT_STYLE_ERROR,
  INPUT_STYLE_NORMAL,
} from "@/constraints/Styles/form-control";
import { FooDto } from "@/types/RegisterMetadata";

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
  name?: string;
  inputProps?: any;
}

export default function Select({
  label,
  name,
  fullwidth = false,
  className = "",
  classNameSelect = "",
  placeholder,
  error = false,
  options = [],
  value,
  inputProps,
  defaultValue,
}: SelectProps) {
  return (
    <FormControl {...{ label, fullwidth, className }}>
      <select
        className={`${
          error ? INPUT_STYLE_ERROR : INPUT_STYLE_NORMAL
        } ${classNameSelect}`}
        {...(value ? { value } : { defaultValue })}
        {...(inputProps && inputProps)}
      >
        <option selected hidden value="">{placeholder}</option>
        {options.map((option: FooDto) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </FormControl>
  );
}
