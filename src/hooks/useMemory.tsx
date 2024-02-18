import { useState } from "react";

export default function useMemory({
  items = [],
  allowRepeat = false,
  customValidator = (a: any, b: any) => a === b,
}: {
  items?: any[];
  allowRepeat?: boolean;
  customValidator?: CallableFunction;
}) {
  const [memory, setMemo] = useState(items ?? []);

  const drop = (cb: any) => {
    setMemo(memory?.filter((a, i) => !cb(a, i)));
  };

  const add = (item: any) => {
    if (!allowRepeat) {
      const exists = memory.find((i) => customValidator(i, item));
      if (exists) return;
    }
    setMemo([...memory, item]);
  };

  const has = (item: any, cb: CallableFunction = customValidator) => {
    return !!memory.find((i) => cb(i, item));
  };

  const toogle = (item: any) => {
    if (has(item)) drop((a: any) => customValidator(a, item));
    else add(item);
  };

  return { memory, add, drop, has, toogle };
}
