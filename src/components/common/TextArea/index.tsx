"use client";

import { useState } from "react";
import Typography from "../Typography";
import Button from "../Button";
import RevealIcon from "../Icon/icons/reveal";
import HideIcon from "../Icon/icons/hide";
import TextFieldProps from "@/types/common/TextField";
import FormControl from "../FormControl";
import {
  INPUT_STYLE_ERROR,
  INPUT_STYLE_NORMAL,
} from "@/constraints/Styles/form-control";

interface TextAreaProps extends TextFieldProps {
  rows?: number;
  cols?: number;
}

export default function TextArea({
  value = "",
  defaultValue = "",
  name = "",
  label = "",
  placeholder = "Placeholder",
  error = false,
  fullwidth = false,
  disabled = false,
  className = "",
  classNameInput = "",
  onChange = (e: any) => (e.target.value = e.target.value),
  rows = 3,
  cols,
}: TextAreaProps) {
  return (
    <FormControl {...{ label, fullwidth, className }}>
      <div className="w-full relative">
        <textarea
          className={`${
            error ? INPUT_STYLE_ERROR : INPUT_STYLE_NORMAL
          } ${classNameInput}`}
          name={name}
          placeholder={placeholder}
          {...(value ? { value } : { defaultValue })}
          disabled={disabled}
          onChange={onChange}
          rows={rows}
          cols={cols}
        />
      </div>
    </FormControl>
  );
}
