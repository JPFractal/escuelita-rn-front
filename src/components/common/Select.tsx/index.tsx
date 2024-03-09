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
  value?: any;
  defaultValue?: string;
  name?: string;
  inputProps?: any;
  onInput?: Function;
  disabled?: boolean;
  helperText?: string;
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
  onInput,
  disabled,
  helperText
}: SelectProps) {
  return (
    <FormControl {...{ label, fullwidth, className }}>
      <select
        className={`${
          error ? INPUT_STYLE_ERROR : INPUT_STYLE_NORMAL
        } ${classNameSelect}`}
        onInput={onInput}
        {...(value ? { value } : { defaultValue })}
        {...inputProps}
        disabled={disabled}
      >
        <option hidden value="">{placeholder}</option>
        {options.map((option: FooDto) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <Typography className={`mt-2 ${error && "text-red-10"}`}>
          {helperText}
      </Typography>
    </FormControl>
  );
}
