import { useState } from "react";

export default function useMemory({
  items = [],
  allowRepeat = false,
}: {
  items?: any[];
  allowRepeat?: boolean;
}) {
  const [memory, setMemo] = useState(items ?? []);

  const drop = (cb: any) => {
    setMemo(memory?.filter((a, b) => !cb(a, b)));
  };

  const add = (item: any) => {
    if (!allowRepeat) {
      const exists = memory.find((i) => i === item);
      if (exists) return;
    }
    setMemo([...memory, item]);
  };

  const has = (
    item: any,
    cb: any = (actual: any, compare: any) => actual === compare
  ) => {
    return !!memory.find((i) => cb(i, item));
  };

  return { memory, add, drop, has };
}
