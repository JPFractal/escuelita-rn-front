import {
  InputHTMLAttributes,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";
import Typography from "../Typography";

interface TextFieldProps {
  value?: string;
  defaultValue?: any;
  name?: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  onChange?: any;
  fullwidth?: boolean;
  className?: string;
  classNameInput?: string;
  type?: string;
}

export default function TextField({
  value = "",
  defaultValue = "",
  name = "",
  label = "",
  placeholder = "Placeholder",
  error = false,
  fullwidth = false,
  className = "",
  classNameInput = "",
  type = "text",
  onChange = null,
}: TextFieldProps) {
  return (
    <fieldset className={`${className} ${fullwidth && "w-full"}`}>
      <label className="flex flex-col gap-2">
        <Typography variant="text-2">{label}</Typography>
        <input
          className={`${classNameInput} p-2.5 rounded-lg border focus:outline outline-4 ${
            error
              ? "border-red-0 outline-red-10/30 text-red-10 placeholder-red-10/60"
              : "border-gray-30 outline-sky-10/30"
          }`}
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...(onChange ? { onChange } : {})}
          {...(value ? { value } : {})}
        />
      </label>
    </fieldset>
  );
}
