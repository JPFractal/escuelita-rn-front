"use client";

import useToogle from "@/hooks/useToogle";
import HeartIcon from "../Icon/icons/heart";
import { palette } from "@/themes/colors";

export default function Toogle({ on = false }: { on?: boolean }) {
  const { flag, toogle } = useToogle(on);

  return (
    <button onClick={toogle} className="focus:border-none focus:outline-none">
      <HeartIcon filled={flag} color={palette.pink[10]} />
    </button>
  );
}
