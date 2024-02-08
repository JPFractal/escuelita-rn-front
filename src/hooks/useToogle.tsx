import { useCallback, useState } from "react";

export default function useToogle(init: boolean = false) {
  const [flag, setFlag] = useState(init);

  const toogle = useCallback(() => setFlag((prev) => !prev), []);
  const on = useCallback(() => setFlag(true), []);
  const off = useCallback(() => setFlag(false), []);

  return {
    toogle,
    on,
    off,
    flag,
  };
}
