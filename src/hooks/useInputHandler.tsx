import { useState } from "react";

export default function useInputHandler(def: any) {
  const [value, setValue] = useState(def);
  const handleChange = (e: any) => setValue(e.target.value);
  const reset = () => setValue(def);

  return {
    value,
    setValue,
    handleChange,
    reset,
  };
}
