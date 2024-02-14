import { useState } from "react";
import CheckBar from "../../CheckBar";
import { uuid } from "uuidv4";

interface CustomFieldSetRadioProps {
  className?: string;
  name?: string;
  items?: Array<{ label: string; value: string }>;
  itemDefault?: number;
}

export default function CustomFieldSetRadio({
  className = "",
  name = "check-item",
  items = [],
  itemDefault,
}: CustomFieldSetRadioProps) {
  const [checked, setChecked] = useState<number | undefined>(itemDefault);

  return (
    <fieldset className={"flex flex-col gap-2 " + className}>
      {items.map((item: { label: string; value: string }, i: number) => (
        <CheckBar
          type="radio"
          name={name}
          label={item.label}
          value={item.value}
          key={uuid()}
          checked={i === checked}
          onClick={() => setChecked(i)}
        />
      ))}
    </fieldset>
  );
}
