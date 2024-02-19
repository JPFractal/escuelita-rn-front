import { ChangeEvent, useState } from "react";

export default function useInputHandler(def: string | number) {
  const [value, setValue] = useState<string | number>(def);
  const [prev, setPreValue] = useState<string | number>(def);

  const reset = () => setValue(prev);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return {
    defaultValue: prev,
    value,
    setValue,
    handleChange,
    reset,
  };
}
