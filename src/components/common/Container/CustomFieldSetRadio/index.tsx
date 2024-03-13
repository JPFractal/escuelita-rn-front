"use client";

import { useState } from "react";
import CheckBar from "../../CheckBar";
import { v4 as uuid } from "uuid";
import Typography from "../../Typography";
import { FooDto } from "@/types/RegisterMetadata";

interface CustomFieldSetRadioProps {
  className?: string;
  name?: string;
  items?: FooDto[];
  itemDefault?: number;
  setValue?: any;
  helperText?: string;
  error?: boolean;
}

export default function CustomFieldSetRadio({
  className = "",
  name = "check-item",
  items = [],
  itemDefault,
  setValue,
  helperText,
  error
}: CustomFieldSetRadioProps) {
  const [checked, setChecked] = useState<number | undefined>(itemDefault);
  const handleCheck = (value: number | undefined, index: number) => {
    if (setValue) {
      setValue(value)
    }
    setChecked(index);
  };

  return (
    <fieldset className={"flex flex-col gap-2 " + className}>
      {items.map((item: FooDto, i: number) => (
        <CheckBar
          type="radio"
          name={name}
          value={item.id}
          label={item.name}
          key={uuid()}
          checked={i === checked}
          onClick={() => handleCheck(item.id, i)}
          error={error}
        />
      ))}
      <Typography className={`mt-1 ${error && "text-red-10"}`}>
          {helperText}
      </Typography>
    </fieldset>
  );
}
