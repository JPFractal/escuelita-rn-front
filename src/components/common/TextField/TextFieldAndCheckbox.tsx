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
  useFormIntegration?: any;
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
  inputProps,
  error = false,
  helperText,
  useFormIntegration,
}: TextFieldAndCheckboxProps) {
  /* The main problem with this component is that i was using a controller input, but with use form integration,
  i have to use uncontrolled input and was a terrible headache, fortunately it has been solved.*/

  const { flag, toogle } = useToogle();

  const initValue =
    useFormIntegration?.getValues(inputProps?.name ?? name) ?? value;

  const {
    value: _value,
    handleChange,
    reset,
    setValue,
    defaultValue,
  } = useInputHandler(initValue);

  useEffect(() => {
    if (flag) {
      setValue(alternative);
      useFormIntegration?.setValue(inputProps?.name ?? name, alternative);
    } else {
      reset();
      useFormIntegration?.setValue(inputProps?.name ?? name, defaultValue);
    }
  }, [flag]);

  return (
    <div className={`${className} flex flex-col gap-2`}>
      <TextField
        label={label}
        placeholder={placeholder}
        fullwidth={fullwidth}
        name={name}
        disabled={flag}
        type={type}
        value={String(_value)}
        inputProps={{ ...inputProps, onChange: handleChange }}
        {...{ error, helperText }}
      />
      <CheckBox label={checkboxLabel} checked={flag} onClick={toogle} />
    </div>
  );
}
