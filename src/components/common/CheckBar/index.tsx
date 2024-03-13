import useToogle from "@/hooks/useToogle";
import Typography from "../Typography";
import CheckIcon from "../Icon/icons/check";
import { MouseEventHandler, useEffect, useRef } from "react";

interface CheckBarProps {
  fullwidth?: boolean;
  checked?: boolean;
  label?: string;
  name?: string;
  type?: "checkbox" | "radio";
  value?: string | number;
  onClick?: MouseEventHandler;
  inputProps?: any;
  helperText?: string;
  error?: boolean;
}

export default function CheckBar({
  fullwidth = false,
  label = "Label",
  name = "check-bar",
  type = "checkbox",
  checked = false,
  value = "",
  onClick = () => {},
  inputProps,
  error
}: CheckBarProps) {
  return (
    <label
      className={`${
        fullwidth && "w-full"
      } p-4 border flex justify-between items-center ${
        checked ? "border-sky-10 bg-sky-40" : "border-gray-35"
      } cursor-pointer rounded-lg ${
        error && "border-red-10"
      }`}
      onClick={onClick}
    >
      <Typography
        variant="text"
        className={`!font-medium ${checked && "text-sky-10"} ${error && "text-red-10"}`}
      >
        {label}
      </Typography>
      <div
        className={`${
          type === "radio" ? "rounded-full" : "rounded-sm"
        } w-4 h-4 flex items-center justify-center ${
          checked ? "bg-sky-10" : "border border-gray-30"
        }`}
      >
        {checked && <CheckIcon size="xl" color="white" />}
      </div>

      <input
        type={type}
        name={name}
        checked={checked}
        onChange={(e) => {
          e.target.checked = checked;
        }}
        className="hidden"
        value={value}
        {...inputProps}
      />
    </label>
  );
}
