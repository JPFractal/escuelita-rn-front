"use client";

import { useEffect } from "react";
import CheckBox from "../CheckBox";
import useToogle from "@/hooks/useToogle";
import useInputHandler from "@/hooks/useInputHandler";
import TextFieldProps from "@/types/common/TextField";
import TextField from ".";

interface TextFieldAndCheckboxProps extends TextFieldProps {
  value?: string;
  alternative?: string;
  checkboxLabel?: string;
}

export default function TextFieldAndCheckbox({
  fullwidth = false,
  className = "",
  label = "Input label",
  placeholder = "Input placeholder",
  value = "",
  name = "",
  alternative = "",
  checkboxLabel = "Checkbox label",
  type = "text",
}: TextFieldAndCheckboxProps) {
  const { flag, toogle } = useToogle();
  const {
    value: _value,
    handleChange,
    reset,
    setValue,
  } = useInputHandler(value);

  useEffect(() => {
    if (flag) setValue(alternative);
    else reset();
  }, [flag]);

  return (
    <div className={`${className} flex flex-col gap-2`}>
      <TextField
        label={label}
        placeholder={placeholder}
        name={name}
        value={_value}
        onChange={handleChange}
        fullwidth={fullwidth}
        disabled={flag}
        type={type}
      />
      <CheckBox label={checkboxLabel} checked={flag} onClick={toogle} />
    </div>
  );
}
