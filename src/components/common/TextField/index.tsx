"use client";

import { useState } from "react";
import Button from "../Button";
import RevealIcon from "../Icon/icons/reveal";
import HideIcon from "../Icon/icons/hide";
import TextFieldProps from "@/types/common/TextField";
import FormControl from "../FormControl";
import {
  INPUT_STYLE_ERROR,
  INPUT_STYLE_NORMAL,
} from "@/constraints/Styles/form-control";

export default function TextField({
  value,
  defaultValue = "",
  name = "",
  label = "",
  placeholder = "Placeholder",
  error = false,
  fullwidth = false,
  disabled = false,
  className = "",
  classNameInput = "",
  type = "text",
  onChange = (e: any) => (e.target.value = e.target.value),
}: TextFieldProps) {
  const [_type, setType] = useState(type);

  return (
    <FormControl {...{ label, fullwidth, className }}>
      <div className="w-full relative">
        <input
          className={`${
            error ? INPUT_STYLE_ERROR : INPUT_STYLE_NORMAL
          } ${classNameInput}`}
          type={_type}
          name={name}
          placeholder={placeholder}
          {...(typeof value !== "undefined" ? { value } : { defaultValue })}
          disabled={disabled}
          onChange={onChange}
        />

        {type === "password" && (
          <Button
            variant="text"
            color="smoke"
            className="absolute bottom-0 right-0 bg-white-0 h-full rounded-s-none border border-gray-30 !border-s-0 hover:bg-white-0"
            onClick={(e) => setType(_type === "password" ? "text" : "password")}
            title={_type === "password" ? "Mostrar" : "Ocultar"}
          >
            {_type === "password" ? (
              <RevealIcon size="lg" />
            ) : (
              <HideIcon size="lg" />
            )}
          </Button>
        )}
      </div>
    </FormControl>
  );
}
