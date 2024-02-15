"use client";

import { useState } from "react";
import Typography from "../Typography";
import Button from "../Button";
import RevealIcon from "../Icon/icons/reveal";
import HideIcon from "../Icon/icons/hide";

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
  const [_type, setType] = useState(type);

  return (
    <fieldset className={`${className} ${fullwidth && "w-full"}`}>
      <label className="flex flex-col gap-2">
        <Typography variant="text-2">{label}</Typography>
        <div className="w-full relative">
          <input
            className={`${classNameInput} p-2.5 rounded-lg border focus:outline outline-4 ${
              error
                ? "border-red-0 outline-red-10/30 text-red-10 placeholder-red-10/60"
                : "border-gray-30 outline-sky-10/30"
            } w-full`}
            type={_type}
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            {...(onChange ? { onChange } : {})}
            {...(value ? { value } : {})}
          />
          {type === "password" && (
            <Button
              variant="text"
              className="absolute bottom-0 right-0 bg-white-0 hover:bg-white-10 h-full rounded-s-none border border-gray-30"
              onClick={(e) =>
                setType(_type === "password" ? "text" : "password")
              }
              title={_type === "password" ? "Mostrar" : "Ocultar"}
            >
              {_type === "password" ? <RevealIcon /> : <HideIcon />}
            </Button>
          )}
        </div>
      </label>
    </fieldset>
  );
}
